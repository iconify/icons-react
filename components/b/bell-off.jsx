import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/a/a9chfzbgq.css';
import '../../css/c/chcx_7b4x.css';
import '../../css/r/r0su4bblh.css';
import '../../css/h/hnamav36t.css';
import '../../css/q/qr4ochb5c.css';
import '../../css/k/klzcy0ogc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="a9chfzbgq"/><path class="chcx_7b4x wm-shine"/><path class="r0su4bblh wm-k"/><path class="hnamav36t wm-a"/><path class="qr4ochb5c wm-s"/><path class="klzcy0ogc wm-deco"/></g>`,
		"fallback": "withicons-kawaii:bell-off",
	});
}

export default Component;
