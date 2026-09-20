import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/irrpp75oa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="irrpp75oa"/>`,
		"fallback": "mdi:babel",
	});
}

export default Component;
