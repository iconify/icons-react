import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vuf0ygbfo.css';
import '../../css/d/d5tm45bdo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vuf0ygbfo"/><path class="d5tm45bdo"/>`,
		"fallback": "streamline-pixel:coding-apps-websites-database",
	});
}

export default Component;
