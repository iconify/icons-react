import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ubfefht9x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ubfefht9x"/>`,
		"fallback": "lucide-extended:between-vertical-end-filled",
	});
}

export default Component;
