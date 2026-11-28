import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u9c2tkvru.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/zofy89fep.css';
import '../../css/m/moe--ccqy.css';
import '../../css/n/n8bh06exd.css';
import '../../css/r/rzz19_b2x.css';
import '../../css/c/cqw1z5qhg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary u9c2tkvru"/><g class="dt0cm9dhy primary"><path class="zofy89fep"/><path class="moe--ccqy"/><path class="n8bh06exd"/><path class="rzz19_b2x"/><path class="cqw1z5qhg"/></g>`,
		"fallback": "iconaut:database-minus-duo",
	});
}

export default Component;
