import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cf211bbax.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cf211bbax"/>`,
		"fallback": "dinkie-icons:file-woff-small-filled",
	});
}

export default Component;
