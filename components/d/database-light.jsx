import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/a/aayufjbdt.css';
import '../../css/z/zzkgp--je.css';
import '../../css/g/gg_6g8wpd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><ellipse class="aayufjbdt"/><path class="zzkgp--je"/><path class="gg_6g8wpd"/></g>`,
		"fallback": "lets-icons:database-light",
	});
}

export default Component;
