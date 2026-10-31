import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/p/p7_ah8bvq.css';
import '../../css/c/cbr3mzkcd.css';
import '../../css/f/flavtsb4l.css';
import '../../css/r/rh9qoibkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="p7_ah8bvq"/><path class="cbr3mzkcd wm-k"/><path class="flavtsb4l wm-a"/><path class="rh9qoibkn wm-deco"/></g>`,
		"fallback": "withicons-kawaii:gold-ingot",
	});
}

export default Component;
