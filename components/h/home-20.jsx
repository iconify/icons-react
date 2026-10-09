import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g52ib27ry.css';
import '../../css/w/wno856buj.css';
import '../../css/d/dsaf1skdq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g52ib27ry"/><path class="wno856buj"/><path class="dsaf1skdq"/>`,
		"fallback": "energy-icons:home-20",
	});
}

export default Component;
