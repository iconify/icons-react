import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lhkmyz5ha.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lhkmyz5ha"/>`,
		"fallback": "hugeicons:diamond-plus",
	});
}

export default Component;
