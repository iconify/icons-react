import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jgyb2p1_c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jgyb2p1_c"/>`,
		"fallback": "cib:evernote",
	});
}

export default Component;
