import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/n/nj7_ueecx.css';
import '../../css/v/v42hvub5u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="nj7_ueecx"/><path class="v42hvub5u"/></g>`,
		"fallback": "keyline-icons:arrow-big-down-short-sharp-two-tone",
	});
}

export default Component;
