import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ts_urt4hp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ts_urt4hp"/>`,
		"fallback": "uil:google",
	});
}

export default Component;
