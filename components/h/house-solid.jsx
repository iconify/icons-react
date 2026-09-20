import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_inqrbwp.css';
import '../../css/a/ad1wvybmm.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r_inqrbwp"/><path class="ad1wvybmm"/>`,
		"fallback": "teenyicons:house-solid",
	});
}

export default Component;
