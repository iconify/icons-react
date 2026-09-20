import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rzjrpw80r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rzjrpw80r"/>`,
		"fallback": "thesvg-color:fireship",
	});
}

export default Component;
