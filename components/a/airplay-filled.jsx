import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aoeatstfv.css';
import '../../css/l/l06m6xpen.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aoeatstfv"/><path class="l06m6xpen"/>`,
		"fallback": "lucide-extended:airplay-filled",
	});
}

export default Component;
