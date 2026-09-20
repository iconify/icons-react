import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w0ln5gbto.css';
import '../../css/j/j6_v_uqiy.css';
import '../../css/y/yfocpm83q.css';
import '../../css/x/xjcj_hb3x.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w0ln5gbto"/><path class="j6_v_uqiy"/><path class="yfocpm83q"/><path class="xjcj_hb3x"/>`,
		"fallback": "material-icon-theme:dart-generated",
	});
}

export default Component;
