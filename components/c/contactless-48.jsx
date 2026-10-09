import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cxsi2dbdr.css';
import '../../css/c/cx1o0f4by.css';
import '../../css/x/xr8sjdbkj.css';
import '../../css/c/cc307ksft.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cxsi2dbdr"/><path class="cx1o0f4by"/><path class="xr8sjdbkj"/><path class="cc307ksft"/>`,
		"fallback": "energy-icons:contactless-48",
	});
}

export default Component;
