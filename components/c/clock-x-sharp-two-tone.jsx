import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/o/ogehitbcm.css';
import '../../css/e/eobdxq5ks.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="ogehitbcm"/><path class="eobdxq5ks"/></g>`,
		"fallback": "keyline-icons:clock-x-sharp-two-tone",
	});
}

export default Component;
