import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oe5qejdtc.css';

const viewBox = {"width":182,"height":218};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oe5qejdtc"/>`,
		"fallback": "thesvg-color:bitwarden",
	});
}

export default Component;
