import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oig6v2bgw.css';
import '../../css/h/hjml06b8p.css';
import '../../css/z/zlhd9s1xt.css';
import '../../css/o/omucvlb9b.css';
import '../../css/p/p7rzdac-g.css';
import '../../css/y/yt3yd0iix.css';
import '../../css/w/w0kzog1ik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oig6v2bgw wm-shadow"/><path class="hjml06b8p wm-k"/><path class="wm-k zlhd9s1xt"/><path class="omucvlb9b wm-a"/><path class="p7rzdac-g wm-a"/><path class="wm-a yt3yd0iix"/><path class="w0kzog1ik wm-a"/>`,
		"fallback": "withicons-pastel:binary",
	});
}

export default Component;
