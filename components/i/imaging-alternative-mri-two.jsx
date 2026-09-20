import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ibdbo8z7t.css';
import '../../css/w/w9i8zcc7s.css';
import '../../css/d/dt9g5gbfr.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ibdbo8z7t"/><path class="w9i8zcc7s"/><path class="dt9g5gbfr"/>`,
		"fallback": "medical-icon:imaging-alternative-mri-two",
	});
}

export default Component;
