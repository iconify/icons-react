import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yt0fkoxbg.css';
import '../../css/g/gsvrl7yuk.css';
import '../../css/g/g76-4kbhs.css';
import '../../css/a/ak1tbub4s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="yt0fkoxbg"/><path class="gsvrl7yuk"/><path class="g76-4kbhs"/><path class="ak1tbub4s"/></g>`,
		"fallback": "andrsrxn:house-droplet",
	});
}

export default Component;
