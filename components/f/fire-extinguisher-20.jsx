import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bt5h_1qtq.css';
import '../../css/f/fn8d5vbzf.css';
import '../../css/b/b2th62z3s.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bt5h_1qtq"/><path class="fn8d5vbzf"/><path class="b2th62z3s"/>`,
		"fallback": "energy-icons:fire-extinguisher-20",
	});
}

export default Component;
