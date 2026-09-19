import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fwse9hejz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fwse9hejz"/>`,
		"fallback": "icon-park-outline:figma-component",
	});
}

export default Component;
