import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/azj7g9b9b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="azj7g9b9b"/>`,
		"fallback": "tabler:border-corners",
	});
}

export default Component;
