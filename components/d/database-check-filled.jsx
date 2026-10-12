import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/grda5wb_p.css';
import '../../css/e/e_r9uibzg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="grda5wb_p"/><path class="e_r9uibzg"/>`,
		"fallback": "lucide-extended:database-check-filled",
	});
}

export default Component;
