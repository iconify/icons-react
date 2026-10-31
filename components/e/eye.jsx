import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/q/qtkm2uepe.css';
import '../../css/k/k5f7qrboz.css';
import '../../css/o/oqf382uiz.css';
import '../../css/h/hbi8hhkfx.css';
import '../../css/r/rh9qoibkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="qtkm2uepe"/><path class="k5f7qrboz wm-shine"/><path class="oqf382uiz wm-k"/><path class="hbi8hhkfx wm-a"/><path class="rh9qoibkn wm-deco"/></g>`,
		"fallback": "withicons-kawaii:eye",
	});
}

export default Component;
