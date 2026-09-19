import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ee_489afo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ee_489afo"/>`,
		"fallback": "gcp:cloud-for-marketing",
	});
}

export default Component;
