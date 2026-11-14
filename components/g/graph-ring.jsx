import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/ota6m6bvt.css';
import '../../css/a/a42ssemfu.css';
import '../../css/z/z_26mrcru.css';
import '../../css/e/em3y75frz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ota6m6bvt"/><circle class="a42ssemfu"/><circle class="z_26mrcru"/><circle class="em3y75frz"/></g>`,
		"fallback": "lucide:graph-ring",
	});
}

export default Component;
