import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pwzk46bvc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pwzk46bvc"/>`,
		"fallback": "tabler:device-mobile-rotated",
	});
}

export default Component;
