import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dxy3rfbfq.css';
import '../../css/k/kngzmjb8s.css';
import '../../css/e/eyyfu1tja.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dxy3rfbfq"/><path class="kngzmjb8s"/><path class="eyyfu1tja"/>`,
		"fallback": "solar:box-minimalistic-bold-duotone",
	});
}

export default Component;
