import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wnhcupbsa.css';
import '../../css/f/f3bevmfxd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wnhcupbsa"/><path class="f3bevmfxd"/>`,
		"fallback": "energy-icons:clamp-meter-20",
	});
}

export default Component;
