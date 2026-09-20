import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aje9uebwj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aje9uebwj"/>`,
		"fallback": "osmic:airport-14",
	});
}

export default Component;
