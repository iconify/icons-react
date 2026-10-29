import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cu8p1jyfm.css';
import '../../css/c/c_91fblln.css';
import '../../css/w/wguz-gn9t.css';
import '../../css/p/pq-qeybii.css';
import '../../css/n/nyq9c63pw.css';
import '../../css/b/bj1_8bb3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cu8p1jyfm wm-shadow"/><path class="c_91fblln wm-k"/><path class="wguz-gn9t wm-k"/><path class="pq-qeybii wm-k"/><path class="nyq9c63pw wm-k"/><path class="bj1_8bb3v wm-shine"/>`,
		"fallback": "withicons-pastel:check",
	});
}

export default Component;
