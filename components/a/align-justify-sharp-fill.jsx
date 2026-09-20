import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/seccp3txc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="seccp3txc"/>`,
		"fallback": "keyline-icons:align-justify-sharp-fill",
	});
}

export default Component;
