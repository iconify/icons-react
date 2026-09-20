import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s-c7f4bry.css';
import '../../css/u/un_5q0boj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s-c7f4bry"/><path class="un_5q0boj"/>`,
		"fallback": "material-icon-theme:folder-archive",
	});
}

export default Component;
