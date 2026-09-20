import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zoif3wlwf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zoif3wlwf"/>`,
		"fallback": "simple-icons:cloudfoundry",
	});
}

export default Component;
