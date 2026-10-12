import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ns05hs95u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ns05hs95u"/>`,
		"fallback": "lucide-extended:chess-knight-filled",
	});
}

export default Component;
