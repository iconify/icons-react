import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/f/f4mjuejrl.css';
import '../../css/s/sm0-3crom.css';
import '../../css/t/t27yfgt9s.css';
import '../../css/e/e-kbne3pc.css';
import '../../css/s/s3yauib2h.css';
import '../../css/v/vmgu87bkx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="f4mjuejrl wm-shadow"/><path class="sm0-3crom"/><path class="t27yfgt9s"/><path class="e-kbne3pc"/><path class="s3yauib2h wm-shine"/><path class="vmgu87bkx wm-deco"/></g>`,
		"fallback": "withicons-sticker:blocks",
	});
}

export default Component;
