import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iamlc8_rk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iamlc8_rk"/>`,
		"fallback": "thesvg-color:google-campaign-manager-360",
	});
}

export default Component;
