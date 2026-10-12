import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pehpq5qtd.css';
import '../../css/b/ba28ldwhx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pehpq5qtd"/><path class="ba28ldwhx"/>`,
		"fallback": "lucide-extended:calendar-minus-filled",
	});
}

export default Component;
