import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nl8_8wpxk.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nl8_8wpxk"/>`,
		"fallback": "el:font",
	});
}

export default Component;
