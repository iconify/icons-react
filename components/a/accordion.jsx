import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p6us18bkg.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p6us18bkg"/>`,
		"fallback": "dinkie-icons:accordion",
	});
}

export default Component;
