import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/jc4l4pbqy.css';
import '../../css/o/ollzt4brz.css';
import '../../css/x/xgz_75bxv.css';
import '../../css/j/ja9zyxbzw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="jc4l4pbqy"/><path class="ollzt4brz wm-a"/><path class="wm-k xgz_75bxv"/><path class="ja9zyxbzw wm-a"/></g>`,
		"fallback": "withicons:grape-sketch",
	});
}

export default Component;
