import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cgakgacod.css';
import '../../css/s/s0oh6wb6v.css';
import '../../css/m/mfmbc9s1v.css';

const viewBox = {"width":25.9,"height":16.8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cgakgacod"/><path class="s0oh6wb6v"/><path class="mfmbc9s1v"/>`,
		"fallback": "formkit:currency",
	});
}

export default Component;
