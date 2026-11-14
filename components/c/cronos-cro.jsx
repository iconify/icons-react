import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pj6hz_b4p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pj6hz_b4p"/>`,
		"fallback": "cbi:cronos-cro",
	});
}

export default Component;
