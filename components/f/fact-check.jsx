import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/byhi3osvb.css';
import '../../css/g/gbfhxvenz.css';
import '../../css/u/uwzh5qb1a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="byhi3osvb"/><path class="gbfhxvenz"/><path class="uwzh5qb1a"/></g>`,
		"fallback": "tdesign:fact-check",
	});
}

export default Component;
