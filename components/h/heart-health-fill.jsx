import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dhuown3os.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dhuown3os"/>`,
		"fallback": "mage:heart-health-fill",
	});
}

export default Component;
