import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/duy3_oprs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="duy3_oprs"/>`,
		"fallback": "griddy-icons:alert-octagon",
	});
}

export default Component;
