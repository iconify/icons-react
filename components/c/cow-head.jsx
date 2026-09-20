import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/d6o5rbbio.css';
import '../../css/p/p4x4mvb5s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="d6o5rbbio"/><path class="p4x4mvb5s"/></g>`,
		"fallback": "lucide-lab:cow-head",
	});
}

export default Component;
