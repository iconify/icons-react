import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/n5-9xvbob.css';
import '../../css/f/fse-o4bbv.css';
import '../../css/a/adnxrhb5g.css';
import '../../css/p/p43mkbb9d.css';
import '../../css/y/y-xkudbrq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="n5-9xvbob"/><path class="fse-o4bbv wm-shadow"/><path class="adnxrhb5g"/><path class="p43mkbb9d"/><path class="y-xkudbrq"/></g>`,
		"fallback": "withicons:bandage-engrave",
	});
}

export default Component;
