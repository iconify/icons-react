import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wb-1labtg.css';
import '../../css/h/hfcvhcccg.css';
import '../../css/y/yiybycb-p.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="wb-1labtg"/><path class="hfcvhcccg"/><path class="yiybycb-p"/>`,
		"fallback": "clarity:host-solid-alerted",
	});
}

export default Component;
