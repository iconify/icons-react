import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/gd20fobey.css';
import '../../css/l/lnxb44b5j.css';
import '../../css/s/sn07vob-o.css';
import '../../css/t/tknvtsbsb.css';
import '../../css/x/x2dse1mrj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="gd20fobey"/><path class="lnxb44b5j"/><path class="sn07vob-o"/><path class="tknvtsbsb"/><path class="x2dse1mrj"/></g>`,
		"fallback": "withicons-bauhaus:avatar-person-glasses",
	});
}

export default Component;
