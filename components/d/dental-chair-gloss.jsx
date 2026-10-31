import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/q6pmzgb0n.css';
import '../../css/h/hk3krbs0f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="q6pmzgb0n wm-k"/><path class="hk3krbs0f wm-a"/></g>`,
		"fallback": "withicons:dental-chair-gloss",
	});
}

export default Component;
