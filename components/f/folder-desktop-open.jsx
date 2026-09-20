import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z0djsxb9c.css';
import '../../css/r/r6hbisqks.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z0djsxb9c"/><path class="r6hbisqks"/>`,
		"fallback": "material-icon-theme:folder-desktop-open",
	});
}

export default Component;
