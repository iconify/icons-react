import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ue4dzob4d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ue4dzob4d"/>`,
		"fallback": "bi:bicycle",
	});
}

export default Component;
