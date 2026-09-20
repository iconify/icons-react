import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/m7rncvbmg.css';
import '../../css/d/dkx-reb8e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="m7rncvbmg"/><path class="dkx-reb8e"/></g>`,
		"fallback": "thesvg:cherry-studio",
	});
}

export default Component;
