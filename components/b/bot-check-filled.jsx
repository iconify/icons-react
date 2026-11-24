import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_r9uibzg.css';
import '../../css/c/cdu9hfbeq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e_r9uibzg"/><path clip-rule="evenodd" class="cdu9hfbeq"/>`,
		"fallback": "lucide-extended:bot-check-filled",
	});
}

export default Component;
