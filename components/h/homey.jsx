import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kzhv-48nt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kzhv-48nt"/>`,
		"fallback": "cbi:homey",
	});
}

export default Component;
