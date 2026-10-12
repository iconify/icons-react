import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ksderlvfw.css';
import '../../css/a/a08-prbmm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ksderlvfw"/><path clip-rule="evenodd" class="a08-prbmm"/>`,
		"fallback": "lucide-extended:banknote-arrow-down-filled",
	});
}

export default Component;
