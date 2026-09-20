import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iqmr3pbxq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iqmr3pbxq"/>`,
		"fallback": "thesvg-color:braintrust",
	});
}

export default Component;
