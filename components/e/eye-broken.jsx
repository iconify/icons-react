import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/gpvdh7sak.css';
import '../../css/j/jb8hy8b-t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="gpvdh7sak"/><path class="jb8hy8b-t"/></g>`,
		"fallback": "solar:eye-broken",
	});
}

export default Component;
