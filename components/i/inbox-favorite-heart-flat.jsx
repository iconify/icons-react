import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mymlz24ut.css';
import '../../css/n/nu11717ap.css';
import '../../css/p/p_u3nvbwf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="mymlz24ut"/><path clip-rule="evenodd" class="nu11717ap"/><path class="p_u3nvbwf"/></g>`,
		"fallback": "streamline-color:inbox-favorite-heart-flat",
	});
}

export default Component;
