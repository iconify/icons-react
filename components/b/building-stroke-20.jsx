import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/grhpkv0pg.css';
import '../../css/f/fc-vduj0h.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="grhpkv0pg"/><path class="fc-vduj0h"/>`,
		"fallback": "garden:building-stroke-20",
	});
}

export default Component;
