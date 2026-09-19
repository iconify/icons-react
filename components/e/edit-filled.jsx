import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dl7kw49lh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dl7kw49lh"/>`,
		"fallback": "griddy-icons:edit-filled",
	});
}

export default Component;
