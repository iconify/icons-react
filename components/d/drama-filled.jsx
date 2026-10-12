import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kax5-cj7n.css';
import '../../css/h/hyllzobun.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kax5-cj7n"/><path clip-rule="evenodd" class="hyllzobun"/>`,
		"fallback": "lucide-extended:drama-filled",
	});
}

export default Component;
