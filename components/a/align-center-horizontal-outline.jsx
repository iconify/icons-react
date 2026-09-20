import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pdk2_smhe.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pdk2_smhe"/>`,
		"fallback": "teenyicons:align-center-horizontal-outline",
	});
}

export default Component;
