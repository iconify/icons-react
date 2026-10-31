import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/k/kmjcqqeii.css';
import '../../css/e/ezpy8bbmg.css';
import '../../css/r/rh9qoibkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="kmjcqqeii"/><path class="ezpy8bbmg"/><path class="rh9qoibkn wm-deco"/></g>`,
		"fallback": "withicons-kawaii:grip-horizontal",
	});
}

export default Component;
