import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rl969zcmk.css';
import '../../css/z/za94ki6pw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rl969zcmk"/><path class="za94ki6pw"/></g>`,
		"fallback": "streamline-ultimate:camera-small",
	});
}

export default Component;
