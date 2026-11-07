import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bbi4wky7o.css';
import '../../css/s/sfo2tsbqu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bbi4wky7o"/><path class="sfo2tsbqu"/>`,
		"fallback": "solar:cloudy-moon-bold-duotone",
	});
}

export default Component;
