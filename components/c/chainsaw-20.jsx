import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nq3f9xb0h.css';
import '../../css/v/vkpsfpb5v.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nq3f9xb0h"/><path class="vkpsfpb5v"/>`,
		"fallback": "energy-icons:chainsaw-20",
	});
}

export default Component;
