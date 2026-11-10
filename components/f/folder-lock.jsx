import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/spkac_bdx.css';
import '../../css/b/bj5taw8na.css';
import '../../css/o/o96z46bqq.css';
import '../../css/o/oj4c755zs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="spkac_bdx"/><path class="bj5taw8na"/><path class="o96z46bqq"/><path class="oj4c755zs"/></g>`,
		"fallback": "andrsrxn:folder-lock",
	});
}

export default Component;
