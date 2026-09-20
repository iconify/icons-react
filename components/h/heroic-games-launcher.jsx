import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ggm8cpb6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ggm8cpb6b"/>`,
		"fallback": "thesvg:heroic-games-launcher",
	});
}

export default Component;
