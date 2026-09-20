import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/b/bow7yubgw.css';
import '../../css/s/s3j__thdr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="bow7yubgw"/><path class="s3j__thdr"/></g>`,
		"fallback": "keyline-icons:credit-card-check-sharp-fill",
	});
}

export default Component;
