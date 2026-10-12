import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qpcj9efqn.css';
import '../../css/s/s9lr0vb6p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qpcj9efqn"/><path class="s9lr0vb6p"/>`,
		"fallback": "lucide-extended:caravan-filled",
	});
}

export default Component;
