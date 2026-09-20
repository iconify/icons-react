import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/paa18-wwh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="paa18-wwh"/>`,
		"fallback": "streamline-plump:fit-to-width-square-solid",
	});
}

export default Component;
