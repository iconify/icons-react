import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yismpnbbv.css';
import '../../css/p/pddla0b_d.css';
import '../../css/g/gcy3r1rbs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yismpnbbv"/><path clip-rule="evenodd" class="pddla0b_d"/><path class="gcy3r1rbs"/>`,
		"fallback": "lucide-extended:building-complex-plus-filled",
	});
}

export default Component;
