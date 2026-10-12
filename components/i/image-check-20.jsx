import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k3s1ebb3w.css';
import '../../css/p/puyefyg7s.css';
import '../../css/p/puz5jibvr.css';
import '../../css/q/qh3-d7bck.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k3s1ebb3w"/><path class="puyefyg7s"/><path class="puz5jibvr"/><path class="qh3-d7bck"/>`,
		"fallback": "energy-icons:image-check-20",
	});
}

export default Component;
