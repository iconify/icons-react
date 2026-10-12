import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ag5uj2ugo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ag5uj2ugo"/>`,
		"fallback": "lucide-extended:clock-2-filled",
	});
}

export default Component;
