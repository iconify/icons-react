import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cw0tgjb3f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cw0tgjb3f"/>`,
		"fallback": "mdi:couch",
	});
}

export default Component;
