import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k6q2pl6bi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k6q2pl6bi"/>`,
		"fallback": "keyline-icons:brain-cog",
	});
}

export default Component;
