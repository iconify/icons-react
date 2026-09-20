import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cnqa97brp.css';
import '../../css/s/s0zsy9ict.css';
import '../../css/x/x7ihsub_r.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cnqa97brp"/><path class="s0zsy9ict"/><path class="x7ihsub_r"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-tanzania",
	});
}

export default Component;
