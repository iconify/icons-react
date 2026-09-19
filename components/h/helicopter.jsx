import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z7vbdsb6a.css';
import '../../css/u/uoczksoxy.css';
import '../../css/o/o__najb1y.css';
import '../../css/j/jy-9ixb9v.css';
import '../../css/b/b0hbsjb_x.css';
import '../../css/i/iqggsjrjt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z7vbdsb6a"/><path class="uoczksoxy"/><path class="o__najb1y"/><path class="jy-9ixb9v"/><path class="b0hbsjb_x"/><path class="iqggsjrjt"/>`,
		"fallback": "fxemoji:helicopter",
	});
}

export default Component;
