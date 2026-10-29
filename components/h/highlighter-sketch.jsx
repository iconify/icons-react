import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/ox-omcb5y.css';
import '../../css/e/e1d1vryur.css';
import '../../css/x/xq-_h1b-e.css';
import '../../css/z/zma78gb_v.css';
import '../../css/q/q86-s3brj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ox-omcb5y"/><path class="e1d1vryur wm-k"/><path class="wm-a xq-_h1b-e"/><path class="wm-k zma78gb_v"/><path class="q86-s3brj wm-a"/></g>`,
		"fallback": "withicons:highlighter-sketch",
	});
}

export default Component;
