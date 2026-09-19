import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/yxync8blm.css';
import '../../css/d/dl4309-si.css';
import '../../css/x/xb2an4dqk.css';
import '../../css/p/pjt-s3_tr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="yxync8blm"/><path class="dl4309-si"/><path class="xb2an4dqk"/><path class="pjt-s3_tr"/></g>`,
		"fallback": "hugeicons:bucket",
	});
}

export default Component;
