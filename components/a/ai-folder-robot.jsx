import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/x/xegt7kkjb.css';
import '../../css/q/q6ne00hdd.css';
import '../../css/j/jfahzt3vh.css';
import '../../css/h/how_d6bkv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="xegt7kkjb"/><path class="q6ne00hdd"/><path class="jfahzt3vh"/><path class="how_d6bkv"/></g>`,
		"fallback": "streamline-sharp-color:ai-folder-robot",
	});
}

export default Component;
