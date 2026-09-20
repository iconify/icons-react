import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ok8jdmbmr.css';
import '../../css/p/pgpjlbcjk.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ok8jdmbmr"/><path class="pgpjlbcjk"/>`,
		"fallback": "medical-icon:inpatient",
	});
}

export default Component;
