import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/x/x6falv9am.css';
import '../../css/h/hjr5enbkw.css';
import '../../css/n/nly9vkofp.css';
import '../../css/w/wkbf8vbre.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow x6falv9am"/><path class="hjr5enbkw wm-shadow"/><path class="nly9vkofp"/><path class="wkbf8vbre"/></g>`,
		"fallback": "withicons-brutal:cloud-lightning",
	});
}

export default Component;
