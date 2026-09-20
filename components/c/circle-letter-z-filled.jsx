import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ds8av67mh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ds8av67mh"/>`,
		"fallback": "tabler:circle-letter-z-filled",
	});
}

export default Component;
