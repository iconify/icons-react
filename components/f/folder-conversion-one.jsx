import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/r/r00m7gbsq.css';
import '../../css/c/c4w4rcmoe.css';
import '../../css/d/d2mzkrbir.css';
import '../../css/i/itc4pfu8l.css';
import '../../css/x/x_n199-gz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="r00m7gbsq"/><path class="c4w4rcmoe"/><path class="d2mzkrbir"/><path class="itc4pfu8l"/><path class="x_n199-gz"/></g>`,
		"fallback": "icon-park:folder-conversion-one",
	});
}

export default Component;
