import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/e/ea0lwhj5k.css';
import '../../css/o/on0ts-5zi.css';
import '../../css/b/bt4eanb_m.css';
import '../../css/e/ee72xe_hx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="ea0lwhj5k"/><path class="on0ts-5zi wm-shine"/><path class="bt4eanb_m wm-k"/><path class="ee72xe_hx wm-a"/></g>`,
		"fallback": "withicons-kawaii:building-2",
	});
}

export default Component;
