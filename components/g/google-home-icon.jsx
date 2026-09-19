import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pv3re6wbv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pv3re6wbv"/>`,
		"fallback": "cbi:google-home-icon",
	});
}

export default Component;
