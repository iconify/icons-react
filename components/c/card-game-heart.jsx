import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cx2ozab0r.css';
import '../../css/n/nhov-4bso.css';
import '../../css/k/kuwmsbc5t.css';
import '../../css/x/xmuhkbl-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cx2ozab0r"/><path class="nhov-4bso"/><path class="kuwmsbc5t"/><path class="xmuhkbl-p"/></g>`,
		"fallback": "streamline-ultimate-color:card-game-heart",
	});
}

export default Component;
