import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c0oa-qzdz.css';
import '../../css/x/xu4qvpb9q.css';
import '../../css/k/kzkcy1d2n.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c0oa-qzdz"/><path class="xu4qvpb9q"/><path class="kzkcy1d2n"/>`,
		"fallback": "energy-icons:arrow-up-circle-20-bold",
	});
}

export default Component;
