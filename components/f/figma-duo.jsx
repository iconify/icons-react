import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vdh654byo.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/lk3a4_bsk.css';
import '../../css/x/xdr5wfo2x.css';
import '../../css/j/jpt088bte.css';
import '../../css/x/xvcvy83wb.css';
import '../../css/f/f-z0o8b2y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary vdh654byo"/><g class="dt0cm9dhy primary"><path class="lk3a4_bsk"/><path class="xdr5wfo2x"/><path class="jpt088bte"/><path class="xvcvy83wb"/><path class="f-z0o8b2y"/></g>`,
		"fallback": "iconaut:figma-duo",
	});
}

export default Component;
