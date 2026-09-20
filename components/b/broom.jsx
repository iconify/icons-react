import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uulld4bua.css';
import '../../css/p/pcbpn5o7g.css';
import '../../css/y/y-bt9jblx.css';
import '../../css/i/izf-hbbgg.css';
import '../../css/o/op9rbnsmy.css';
import '../../css/m/m86clnb5z.css';
import '../../css/g/g88wf8b8q.css';
import '../../css/d/d0mu1rmsn.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uulld4bua"/><path class="pcbpn5o7g"/><path class="y-bt9jblx"/><path class="izf-hbbgg"/><path class="op9rbnsmy"/><circle class="m86clnb5z"/><circle class="g88wf8b8q"/><circle class="d0mu1rmsn"/>`,
		"fallback": "openmoji:broom",
	});
}

export default Component;
