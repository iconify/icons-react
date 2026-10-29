import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/ijybl-k1p.css';
import '../../css/u/uh6a78blk.css';
import '../../css/z/z_02kkxdd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ijybl-k1p"/><path class="uh6a78blk wm-a"/><path class="z_02kkxdd"/></g>`,
		"fallback": "withicons:book-open-check-duo",
	});
}

export default Component;
