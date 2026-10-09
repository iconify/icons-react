import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l8bmplu8s.css';
import '../../css/v/vgb2cgbyg.css';
import '../../css/k/kiw8kob5k.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l8bmplu8s"/><path class="vgb2cgbyg"/><path class="kiw8kob5k"/>`,
		"fallback": "energy-icons:headset-20-bold",
	});
}

export default Component;
