import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/u/um75r8bdu.css';
import '../../css/v/vftm4uxrm.css';
import '../../css/r/rnh5g1b7n.css';
import '../../css/g/gq97cibuo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="um75r8bdu"/><path class="vftm4uxrm"/><path class="rnh5g1b7n"/><path class="gq97cibuo"/></g>`,
		"fallback": "iconamoon:file-image-light",
	});
}

export default Component;
