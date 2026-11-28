import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yxcp0ac0c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yxcp0ac0c"/>`,
		"fallback": "noviair:briefcase-check",
	});
}

export default Component;
