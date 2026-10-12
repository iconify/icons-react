import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bz9b-3b4c.css';
import '../../css/f/fh-ustbyj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bz9b-3b4c"/><path class="fh-ustbyj"/>`,
		"fallback": "lucide-extended:calendar-check-2-filled",
	});
}

export default Component;
