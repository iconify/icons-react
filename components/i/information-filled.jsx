import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jpmw0obfn.css';
import '../../css/e/ehafz-rwx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jpmw0obfn"/><path class="ehafz-rwx"/>`,
		"fallback": "carbon:information-filled",
	});
}

export default Component;
