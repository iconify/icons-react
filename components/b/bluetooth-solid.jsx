import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pwzt3s_jn.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid clr-i-solid-path-1 pwzt3s_jn"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:bluetooth-solid",
	});
}

export default Component;
