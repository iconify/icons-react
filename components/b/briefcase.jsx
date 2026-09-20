import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xbvt165ne.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xbvt165ne"/>`,
		"fallback": "uil:briefcase",
	});
}

export default Component;
