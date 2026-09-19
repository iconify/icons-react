import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/khgs00bjt.css';
import '../../css/n/ngyi29bdb.css';
import '../../css/r/rxyiwtdxn.css';
import '../../css/m/m1lbx02vh.css';
import '../../css/v/vlubo49by.css';
import '../../css/q/qy75zbb9g.css';
import '../../css/b/byj6-ca8o.css';
import '../../css/z/zd-igubsf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="khgs00bjt"/><path class="ngyi29bdb"/><ellipse class="rxyiwtdxn"/><ellipse class="m1lbx02vh"/><path class="vlubo49by"/><path class="qy75zbb9g"/><path class="byj6-ca8o"/><path class="zd-igubsf"/>`,
		"fallback": "fxemoji:hamburger",
	});
}

export default Component;
