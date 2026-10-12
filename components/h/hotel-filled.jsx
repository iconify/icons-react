import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wujzeacfu.css';
import '../../css/m/mtpfyebhq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wujzeacfu"/><path class="mtpfyebhq"/>`,
		"fallback": "lucide-extended:hotel-filled",
	});
}

export default Component;
