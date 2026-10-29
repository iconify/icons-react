import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/cenbvlbmu.css';
import '../../css/h/heklfhb1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="cenbvlbmu"/><path class="heklfhb1i wm-a"/></g>`,
		"fallback": "withicons:dental-chair-solid",
	});
}

export default Component;
