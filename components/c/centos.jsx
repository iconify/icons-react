import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vuvplbckt.css';
import '../../css/n/n7ffj_asf.css';
import '../../css/c/crzhrw1pi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="vuvplbckt"/><path class="n7ffj_asf"/><path class="crzhrw1pi"/>`,
		"fallback": "selfhst:centos",
	});
}

export default Component;
