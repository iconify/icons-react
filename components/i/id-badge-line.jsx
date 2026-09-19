import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fg3jy0b5j.css';
import '../../css/y/y23fb-bou.css';
import '../../css/s/sn4y9wbhh.css';
import '../../css/d/dhuoqxbpk.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 fg3jy0b5j"/><path class="clr-i-outline clr-i-outline-path-2 y23fb-bou"/><path class="clr-i-outline clr-i-outline-path-3 sn4y9wbhh"/><path class="clr-i-outline clr-i-outline-path-4 dhuoqxbpk"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:id-badge-line",
	});
}

export default Component;
