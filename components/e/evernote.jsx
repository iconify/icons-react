import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/exv5f0b-b.css';

const viewBox = {"width":400,"height":488};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="exv5f0b-b"/>`,
		"fallback": "ps:evernote",
	});
}

export default Component;
