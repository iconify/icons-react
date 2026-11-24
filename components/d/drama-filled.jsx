import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kax5-cj7n.css';
import '../../css/m/mk5ucybgj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kax5-cj7n"/><path clip-rule="evenodd" class="mk5ucybgj"/>`,
		"fallback": "lucide-extended:drama-filled",
	});
}

export default Component;
