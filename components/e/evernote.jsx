import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hfp51pbyn.css';

const viewBox = {"width":897,"height":1025};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hfp51pbyn"/>`,
		"fallback": "whh:evernote",
	});
}

export default Component;
