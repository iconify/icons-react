import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fv_3-tbva.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fv_3-tbva"/>`,
		"fallback": "streamline-plump:gameboy-solid",
	});
}

export default Component;
