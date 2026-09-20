import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tz727r4ns.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tz727r4ns"/>`,
		"fallback": "streamline-flex:finger-snapping-solid",
	});
}

export default Component;
