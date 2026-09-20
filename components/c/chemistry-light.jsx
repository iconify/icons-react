import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h3rsyebkx.css';
import '../../css/y/yt_neeiwa.css';
import '../../css/h/hrnk_n1cr.css';
import '../../css/q/qp3ndol4a.css';
import '../../css/d/d6on-ubft.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h3rsyebkx"/><path class="yt_neeiwa"/><circle class="hrnk_n1cr"/><circle class="qp3ndol4a"/><circle class="d6on-ubft"/></g>`,
		"fallback": "lets-icons:chemistry-light",
	});
}

export default Component;
