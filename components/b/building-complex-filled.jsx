import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a6j4wovga.css';
import '../../css/g/gcy3r1rbs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a6j4wovga"/><path class="gcy3r1rbs"/>`,
		"fallback": "lucide-extended:building-complex-filled",
	});
}

export default Component;
