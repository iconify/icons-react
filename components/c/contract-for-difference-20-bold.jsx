import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iccsyvk3j.css';
import '../../css/y/yz82tw-9z.css';
import '../../css/g/gm0aa1bxc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iccsyvk3j"/><path class="yz82tw-9z"/><path class="gm0aa1bxc"/>`,
		"fallback": "energy-icons:contract-for-difference-20-bold",
	});
}

export default Component;
