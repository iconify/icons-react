import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wx92hybfl.css';
import '../../css/d/dmm45_lcf.css';
import '../../css/l/lb7h8tbjg.css';
import '../../css/s/s2e5-v7hd.css';
import '../../css/e/exp3adbxq.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wx92hybfl"/><path class="dmm45_lcf"/><path class="lb7h8tbjg"/><path class="s2e5-v7hd"/><path class="exp3adbxq"/>`,
		"fallback": "devicon:ghidra",
	});
}

export default Component;
