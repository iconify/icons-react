import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gedh83xwq.css';
import '../../css/f/fm0wgfb-l.css';
import '../../css/w/wl6otcutx.css';
import '../../css/r/rpw199hlv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="gedh83xwq"/><path class="fm0wgfb-l"/><path class="wl6otcutx"/><path class="rpw199hlv"/></g>`,
		"fallback": "streamline-ultimate:human-resources-network",
	});
}

export default Component;
