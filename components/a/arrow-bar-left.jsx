import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gfx2zdb7t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gfx2zdb7t"/>`,
		"fallback": "tabler:arrow-bar-left",
	});
}

export default Component;
