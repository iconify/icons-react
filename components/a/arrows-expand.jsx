import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mbu2q9mrv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mbu2q9mrv"/>`,
		"fallback": "heroicons-outline:arrows-expand",
	});
}

export default Component;
