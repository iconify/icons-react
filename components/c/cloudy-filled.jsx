import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aze5wybco.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aze5wybco"/>`,
		"fallback": "lucide-extended:cloudy-filled",
	});
}

export default Component;
