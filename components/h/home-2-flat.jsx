import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/g/gjw0p4bjk.css';
import '../../css/c/crd8sktpe.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="gjw0p4bjk"/><path class="crd8sktpe"/></g>`,
		"fallback": "streamline-flex-color:home-2-flat",
	});
}

export default Component;
