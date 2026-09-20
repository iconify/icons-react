import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ehi4htb-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ehi4htb-e"/>`,
		"fallback": "pixelarticons:google",
	});
}

export default Component;
