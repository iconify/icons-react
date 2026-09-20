import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qb_4tt4ue.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qb_4tt4ue"/>`,
		"fallback": "thesvg-color:floatplane",
	});
}

export default Component;
