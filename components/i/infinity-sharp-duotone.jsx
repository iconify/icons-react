import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q4dwjys8c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q4dwjys8c"/>`,
		"fallback": "keyline-icons:infinity-sharp-duotone",
	});
}

export default Component;
