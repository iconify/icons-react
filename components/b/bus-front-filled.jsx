import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v-l2srbfo.css';
import '../../css/n/nj8492k6t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v-l2srbfo"/><path clip-rule="evenodd" class="nj8492k6t"/>`,
		"fallback": "lucide-extended:bus-front-filled",
	});
}

export default Component;
