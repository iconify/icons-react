import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tqgpg9bzx.css';
import '../../css/a/atb87lbap.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tqgpg9bzx"/><path clip-rule="evenodd" class="atb87lbap"/>`,
		"fallback": "lucide-extended:fish-filled",
	});
}

export default Component;
