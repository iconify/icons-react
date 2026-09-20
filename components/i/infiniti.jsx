import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dn9zdrb3p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dn9zdrb3p"/>`,
		"fallback": "simple-icons:infiniti",
	});
}

export default Component;
