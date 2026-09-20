import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z8hypz94q.css';
import '../../css/e/egr9lubhk.css';
import '../../css/s/sp_2fg58m.css';
import '../../css/n/nqtzyb51v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z8hypz94q"/><path class="egr9lubhk"/><path class="sp_2fg58m"/><path class="nqtzyb51v"/></g>`,
		"fallback": "streamline-ultimate-color:button-play-1",
	});
}

export default Component;
