import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zui2hxbrq.css';
import '../../css/h/hhdv4dm-f.css';
import '../../css/t/t_zsd3ayu.css';
import '../../css/g/gfzoj3bld.css';
import '../../css/q/qvxnog31u.css';
import '../../css/g/golqglbxi.css';
import '../../css/e/esyf9t7ob.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zui2hxbrq"/><path class="hhdv4dm-f"/><path class="t_zsd3ayu"/><path class="gfzoj3bld"/><path class="qvxnog31u"/><path class="golqglbxi"/><path class="esyf9t7ob"/>`,
		"fallback": "fxemoji:europeanpostoffice",
	});
}

export default Component;
