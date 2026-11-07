import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dm03gzbnp.css';
import '../../css/f/f64xfybyo.css';
import '../../css/y/yp5dl9p5w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dm03gzbnp"/><path class="f64xfybyo"/><path class="yp5dl9p5w"/>`,
		"fallback": "solar:graph-down-new-bold-duotone",
	});
}

export default Component;
