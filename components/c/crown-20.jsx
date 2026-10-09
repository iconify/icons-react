import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m2zzj1mmc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m2zzj1mmc"/>`,
		"fallback": "energy-icons:crown-20",
	});
}

export default Component;
