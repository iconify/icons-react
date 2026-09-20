import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xoco9ob4a.css';
import '../../css/s/sa1x33xzo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xoco9ob4a"/><path class="sa1x33xzo"/>`,
		"fallback": "mage:hospital-circle-fill",
	});
}

export default Component;
