import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ja9avj50u.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ja9avj50u"/>`,
		"fallback": "fa7-regular:file-word",
	});
}

export default Component;
