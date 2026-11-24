import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/drjg4yr8g.css';
import '../../css/w/w8ad1sbib.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="drjg4yr8g"/><path class="w8ad1sbib"/>`,
		"fallback": "lucide-extended:bell-plus-filled",
	});
}

export default Component;
