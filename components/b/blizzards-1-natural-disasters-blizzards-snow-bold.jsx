import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e9frtlbdb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e9frtlbdb"/>`,
		"fallback": "streamline-ultimate:blizzards-1-natural-disasters-blizzards-snow-bold",
	});
}

export default Component;
