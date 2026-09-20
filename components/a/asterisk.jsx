import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hs_zz3b4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hs_zz3b4d"/>`,
		"fallback": "ri:asterisk",
	});
}

export default Component;
