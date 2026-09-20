import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ivjvz2eii.css';
import '../../css/d/d516vkb6g.css';
import '../../css/s/s0_05_nra.css';
import '../../css/h/h01tyzbfu.css';
import '../../css/v/vdjag18vm.css';
import '../../css/c/ccd5ask7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGk33K9cMQ" width="18" height="22" x="3" y="1" maskUnits="userSpaceOnUse" class="ivjvz2eii"><path class="d516vkb6g"/><path class="s0_05_nra"/></mask><g class="h01tyzbfu"><path mask="url(#SVGk33K9cMQ)" class="vdjag18vm"/><path class="ccd5ask7v"/></g>`,
		"fallback": "lets-icons:humidity",
	});
}

export default Component;
