import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ypaom25mp.css';
import '../../css/u/uwmcnls3m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ypaom25mp"/><path class="uwmcnls3m"/>`,
		"fallback": "lucide-extended:copy-plus-filled",
	});
}

export default Component;
