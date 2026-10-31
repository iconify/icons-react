import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/i/iow_4ybji.css';
import '../../css/v/vgxumkbnz.css';
import '../../css/y/y4flwfbun.css';
import '../../css/s/ss-bu_bnf.css';
import '../../css/i/i64xizi4g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="iow_4ybji"/><path class="vgxumkbnz"/><path class="wm-shine y4flwfbun"/><path class="ss-bu_bnf wm-k"/><path class="i64xizi4g wm-a"/></g>`,
		"fallback": "withicons-kawaii:bot",
	});
}

export default Component;
