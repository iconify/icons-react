import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d00cz4bxd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d00cz4bxd"/>`,
		"fallback": "stash:drag-squares-vertical-solid",
	});
}

export default Component;
