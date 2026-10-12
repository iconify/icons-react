import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yaugexbvp.css';
import '../../css/k/k1bhl7bhd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yaugexbvp"/><path clip-rule="evenodd" class="k1bhl7bhd"/>`,
		"fallback": "lucide-extended:circle-star-filled",
	});
}

export default Component;
