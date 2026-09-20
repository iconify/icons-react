import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kkqyzzbfj.css';
import '../../css/b/bx4rw7b1f.css';
import '../../css/d/d8xx9_fdz.css';
import '../../css/x/x8vggjbkq.css';
import '../../css/v/vwumstexa.css';
import '../../css/c/cklwdacxb.css';
import '../../css/q/qsqsjlb1x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kkqyzzbfj"/><path class="bx4rw7b1f"/><path class="d8xx9_fdz"/><path class="x8vggjbkq"/><path class="vwumstexa"/><path class="cklwdacxb"/><path class="qsqsjlb1x"/>`,
		"fallback": "token:amb",
	});
}

export default Component;
