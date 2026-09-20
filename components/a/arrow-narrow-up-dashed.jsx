import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/igrvd-boo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="igrvd-boo"/>`,
		"fallback": "tabler:arrow-narrow-up-dashed",
	});
}

export default Component;
