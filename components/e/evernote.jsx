import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a7p1x9bsl.css';

const viewBox = {"width":617,"height":740};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a7p1x9bsl"/>`,
		"fallback": "ls:evernote",
	});
}

export default Component;
