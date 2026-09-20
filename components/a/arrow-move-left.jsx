import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mckg81b6t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mckg81b6t"/>`,
		"fallback": "tabler:arrow-move-left",
	});
}

export default Component;
