import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gbv1_z37o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gbv1_z37o"/>`,
		"fallback": "mynaui:asterisk-octagon",
	});
}

export default Component;
