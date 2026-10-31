import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/o/ol-oa2uhg.css';
import '../../css/z/z9epmsbdp.css';
import '../../css/r/rh9qoibkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="ol-oa2uhg wm-k"/><path class="wm-a z9epmsbdp"/><path class="rh9qoibkn wm-deco"/></g>`,
		"fallback": "withicons-kawaii:arrow-up",
	});
}

export default Component;
