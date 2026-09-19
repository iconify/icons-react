import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/et58hkbbq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="et58hkbbq"/>`,
		"fallback": "fa6-brands:dribbble",
	});
}

export default Component;
