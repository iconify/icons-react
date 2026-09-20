import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cnqa97brp.css';
import '../../css/r/rrv4pwbeq.css';
import '../../css/q/qa8dft0lk.css';
import '../../css/s/s3bya1bop.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cnqa97brp"/><path class="rrv4pwbeq"/><path class="qa8dft0lk"/><path class="s3bya1bop"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-kazakhstan",
	});
}

export default Component;
