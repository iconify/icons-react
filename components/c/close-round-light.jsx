import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bikxxac2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bikxxac2d"/>`,
		"fallback": "lets-icons:close-round-light",
	});
}

export default Component;
