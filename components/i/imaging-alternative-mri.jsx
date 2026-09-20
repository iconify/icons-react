import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mhnxvf8sx.css';
import '../../css/b/br4kpx8po.css';
import '../../css/w/wnu_u707u.css';

const viewBox = {"width":63,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mhnxvf8sx"/><path class="br4kpx8po"/><path class="wnu_u707u"/>`,
		"fallback": "medical-icon:imaging-alternative-mri",
	});
}

export default Component;
