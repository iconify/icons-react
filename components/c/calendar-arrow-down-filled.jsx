import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g647b6wru.css';
import '../../css/a/abpmulcbw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g647b6wru"/><path class="abpmulcbw"/>`,
		"fallback": "lucide-extended:calendar-arrow-down-filled",
	});
}

export default Component;
