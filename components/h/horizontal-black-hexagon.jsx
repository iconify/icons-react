import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pjfivrb5n.css';
import '../../css/a/avaswac7g.css';
import '../../css/f/fy-udj6-o.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pjfivrb5n"/><path class="avaswac7g"/><path class="fy-udj6-o"/>`,
		"fallback": "openmoji:horizontal-black-hexagon",
	});
}

export default Component;
