import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dyw1nmuwy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dyw1nmuwy"/>`,
		"fallback": "tabler:brand-bebo",
	});
}

export default Component;
