import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z0pyeiank.css';
import '../../css/r/r7c5xu-gz.css';
import '../../css/k/k_sbwgbaj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z0pyeiank"/><path class="r7c5xu-gz"/><path class="k_sbwgbaj"/>`,
		"fallback": "energy-icons:git-branch-20",
	});
}

export default Component;
