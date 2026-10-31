import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/j/jcdesib7u.css';
import '../../css/w/wnz0iqbyf.css';
import '../../css/t/tzhb1vbig.css';
import '../../css/w/wb3c7x6fa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="jcdesib7u"/><path class="wm-k wnz0iqbyf"/><path class="tzhb1vbig wm-a"/><path class="wb3c7x6fa wm-deco"/></g>`,
		"fallback": "withicons-kawaii:chart-candlestick",
	});
}

export default Component;
