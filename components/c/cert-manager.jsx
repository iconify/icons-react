import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ofr0qbbgx.css';
import '../../css/v/vuj78ebsz.css';
import '../../css/q/qldlfbb-n.css';
import '../../css/e/eb00tkyfb.css';
import '../../css/y/yj5xdrbpu.css';
import '../../css/l/leim8pvvb.css';
import '../../css/n/nd1cofbsi.css';

const viewBox = {"width":792,"height":792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ofr0qbbgx"/><path class="vuj78ebsz"/><path class="qldlfbb-n"/><path class="eb00tkyfb"/><path class="yj5xdrbpu"/><path class="leim8pvvb"/><path class="nd1cofbsi"/>`,
		"fallback": "thesvg:cert-manager",
	});
}

export default Component;
