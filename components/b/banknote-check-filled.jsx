import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g-wke7znd.css';
import '../../css/p/p1xhgbied.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g-wke7znd"/><path clip-rule="evenodd" class="p1xhgbied"/>`,
		"fallback": "lucide-extended:banknote-check-filled",
	});
}

export default Component;
