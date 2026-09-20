import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6tjmo3jk.css';
import '../../css/u/ugqcf7rcn.css';
import '../../css/k/k69zopbyy.css';
import '../../css/c/c42668blu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="z6tjmo3jk"><path class="ugqcf7rcn"/><path class="k69zopbyy"/><path class="c42668blu"/></g>`,
		"fallback": "streamline-cyber:camera-flash-off",
	});
}

export default Component;
