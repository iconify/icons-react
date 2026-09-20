import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xyk017emc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xyk017emc"/>`,
		"fallback": "tabler:heart-plus",
	});
}

export default Component;
