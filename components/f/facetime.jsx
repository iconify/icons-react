import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/o3asidbga.css';
import '../../css/i/i3_wdu1cq.css';
import '../../css/a/aw5cy6wrw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="o3asidbga"/><path class="i3_wdu1cq"/><path class="aw5cy6wrw"/></g>`,
		"fallback": "iconoir:facetime",
	});
}

export default Component;
