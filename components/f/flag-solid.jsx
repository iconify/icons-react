import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xulwhlnvn.css';
import '../../css/i/ig66h0gfs.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid clr-i-solid-path-1 xulwhlnvn"/><path class="clr-i-solid clr-i-solid-path-2 ig66h0gfs"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:flag-solid",
	});
}

export default Component;
