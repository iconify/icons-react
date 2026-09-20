import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mim7gjbgt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mim7gjbgt"/>`,
		"fallback": "tabler:filter-filled",
	});
}

export default Component;
