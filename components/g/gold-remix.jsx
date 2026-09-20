import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ej5e9xjrk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ej5e9xjrk"/>`,
		"fallback": "streamline-plump:gold-remix",
	});
}

export default Component;
