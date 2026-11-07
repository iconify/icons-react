import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sd7x7gmgh.css';
import '../../css/r/r_ko2hb4g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sd7x7gmgh"/><path class="r_ko2hb4g"/>`,
		"fallback": "solar:infinite-bold-duotone",
	});
}

export default Component;
