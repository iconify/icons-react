import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w87quob4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w87quob4d"/>`,
		"fallback": "boxicons:album-covers",
	});
}

export default Component;
