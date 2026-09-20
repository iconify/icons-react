import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/naxy9xbfk.css';
import '../../css/d/d39lqcbsh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="naxy9xbfk"/><path class="d39lqcbsh"/></g>`,
		"fallback": "thesvg:assemblyai",
	});
}

export default Component;
