import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wkzyxkb4a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wkzyxkb4a"/>`,
		"fallback": "lucide:fish-symbol",
	});
}

export default Component;
