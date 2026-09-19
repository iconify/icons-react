import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_qs3bckf.css';
import '../../css/p/pzkhnyb6c.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 f_qs3bckf"/><path class="clr-i-outline clr-i-outline-path-2 pzkhnyb6c"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:eye-line",
	});
}

export default Component;
