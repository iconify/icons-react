import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i7__prbvz.css';
import '../../css/v/vykt_qbyx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i7__prbvz"/><path clip-rule="evenodd" class="vykt_qbyx"/>`,
		"fallback": "lucide-extended:folder-search-2-filled",
	});
}

export default Component;
