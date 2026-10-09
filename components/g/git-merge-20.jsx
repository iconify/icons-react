import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rgbvxq5ir.css';
import '../../css/r/r7c5xu-gz.css';
import '../../css/t/to374yt6r.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rgbvxq5ir"/><path class="r7c5xu-gz"/><path class="to374yt6r"/>`,
		"fallback": "energy-icons:git-merge-20",
	});
}

export default Component;
