import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u7wvp7oxw.css';
import '../../css/s/s4dgi_7mp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u7wvp7oxw"/><path class="s4dgi_7mp"/>`,
		"fallback": "lucide-extended:calendar-x-2-filled",
	});
}

export default Component;
