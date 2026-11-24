import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v72yvk6dr.css';
import '../../css/e/e2m9rbc6m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v72yvk6dr"/><path clip-rule="evenodd" class="e2m9rbc6m"/>`,
		"fallback": "lucide-extended:ball-wave-filled",
	});
}

export default Component;
