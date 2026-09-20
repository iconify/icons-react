import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rz60q6vwo.css';
import '../../css/s/sh6-s11qn.css';
import '../../css/x/xiuubmb4i.css';
import '../../css/g/gxfoiqbni.css';
import '../../css/m/m8dkdkili.css';
import '../../css/h/hgz2cdc-v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rz60q6vwo"/><path class="sh6-s11qn"/><path class="xiuubmb4i"/><path class="gxfoiqbni"/><path class="m8dkdkili"/><path class="hgz2cdc-v"/></g>`,
		"fallback": "streamline-cyber-color:headset-pulse",
	});
}

export default Component;
