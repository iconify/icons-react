import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w9--i9bid.css';
import '../../css/k/kp83vo4-e.css';
import '../../css/f/fcvnsw9zt.css';
import '../../css/i/i-otnfmzx.css';
import '../../css/a/ajh8fsxju.css';
import '../../css/n/n_fv7b7om.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w9--i9bid"/><path class="kp83vo4-e"/><path class="fcvnsw9zt"/><path class="i-otnfmzx"/><path class="ajh8fsxju"/><path class="n_fv7b7om"/>`,
		"fallback": "selfhst:ace-stream",
	});
}

export default Component;
