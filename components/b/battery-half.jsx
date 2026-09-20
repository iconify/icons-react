import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o64o7ab6t.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-6};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o64o7ab6t"/>`,
		"fallback": "jam:battery-half",
	});
}

export default Component;
