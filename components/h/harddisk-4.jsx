import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/q/qn38fh7cv.css';
import '../../css/e/e-wbu4bmr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="qn38fh7cv"/><path class="e-wbu4bmr"/></g>`,
		"fallback": "streamline-cyber:harddisk-4",
	});
}

export default Component;
