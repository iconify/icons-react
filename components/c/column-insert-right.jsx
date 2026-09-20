import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ttq7frigg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ttq7frigg"/>`,
		"fallback": "tabler:column-insert-right",
	});
}

export default Component;
