import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ntsye-bwz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ntsye-bwz"/>`,
		"fallback": "tabler:briefcase-2",
	});
}

export default Component;
