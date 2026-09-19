import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/df_1kpbuf.css';
import '../../css/m/m4an1nvxr.css';
import '../../css/s/s9ac_mqsh.css';
import '../../css/f/f1btw72vs.css';
import '../../css/s/sbe6zacnl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="df_1kpbuf"/><path class="m4an1nvxr"/><path class="s9ac_mqsh"/><path class="f1btw72vs"/><path class="sbe6zacnl"/>`,
		"fallback": "fxemoji:bridgeatnight",
	});
}

export default Component;
