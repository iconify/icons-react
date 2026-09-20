import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
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
		"content": `<g class="flen3tbdj"><ellipse class="aayufjbdt"/><path class="zzkgp--je"/><path class="gg_6g8wpd"/></g>`,
		"fallback": "lets-icons:database",
	});
}

export default Component;
