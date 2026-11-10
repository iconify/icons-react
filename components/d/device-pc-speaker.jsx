import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yfj-lktrr.css';
import '../../css/y/yqsxyz2pv.css';
import '../../css/a/aw4bcqbxh.css';
import '../../css/n/nq1iur8tg.css';
import '../../css/s/sjtplc5wr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yfj-lktrr"/><circle class="yqsxyz2pv"/><path class="aw4bcqbxh"/><circle class="nq1iur8tg"/><path class="sjtplc5wr"/></g>`,
		"fallback": "andrsrxn:device-pc-speaker",
	});
}

export default Component;
