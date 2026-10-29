import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/l/l7xkddbwv.css';
import '../../css/n/nng5iyb4r.css';
import '../../css/y/yne8p70gu.css';
import '../../css/u/uu1axliux.css';
import '../../css/s/so6b4cc8z.css';
import '../../css/j/jm2f1rbcj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="l7xkddbwv wm-shadow"/><path class="nng5iyb4r"/><path class="yne8p70gu"/><path class="uu1axliux"/><path class="so6b4cc8z wm-shine"/><path class="jm2f1rbcj wm-deco"/></g>`,
		"fallback": "withicons-sticker:app-window",
	});
}

export default Component;
