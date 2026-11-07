import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gde1vd8ly.css';
import '../../css/m/miik5gboc.css';
import '../../css/m/m8_v07a_t.css';
import '../../css/w/wewvnfb9l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gde1vd8ly"/><path class="miik5gboc"/><path class="m8_v07a_t"/><path class="wewvnfb9l"/>`,
		"fallback": "solar:clapperboard-open-bold",
	});
}

export default Component;
