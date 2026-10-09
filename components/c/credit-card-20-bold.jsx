import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fwtvv7bpf.css';
import '../../css/s/sxyqv-bck.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fwtvv7bpf"/><path class="sxyqv-bck"/>`,
		"fallback": "energy-icons:credit-card-20-bold",
	});
}

export default Component;
