import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dbhmpbcfb.css';
import '../../css/t/t_72od1sa.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dbhmpbcfb"/><path class="t_72od1sa"/>`,
		"fallback": "selfhst:aliexpress-light",
	});
}

export default Component;
