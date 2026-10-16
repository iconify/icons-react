import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iku0ku7vq.css';
import '../../css/t/t1somzbtw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iku0ku7vq"/><path class="t1somzbtw"/>`,
		"fallback": "energy-icons:dry-cask-20",
	});
}

export default Component;
