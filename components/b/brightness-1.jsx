import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n8wstgbkt.css';
import '../../css/v/vju1itsyl.css';
import '../../css/i/i4sl-ib2t.css';
import '../../css/w/wx5o7dkec.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n8wstgbkt"/><path class="vju1itsyl"/><path class="i4sl-ib2t"/><path class="wx5o7dkec"/></g>`,
		"fallback": "tdesign:brightness-1",
	});
}

export default Component;
