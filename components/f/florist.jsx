import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aspcfwdmv.css';
import '../../css/a/ar92us5lh.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<ellipse class="aspcfwdmv"/><path class="ar92us5lh"/>`,
		"fallback": "map:florist",
	});
}

export default Component;
