import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oji7-fo-r.css';
import '../../css/o/o9y7arbis.css';
import '../../css/u/um-nuabge.css';
import '../../css/m/masczrbhq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="oji7-fo-r"/><path class="o9y7arbis"/><path class="um-nuabge"/><path class="masczrbhq"/></g>`,
		"fallback": "tdesign:eggplant",
	});
}

export default Component;
