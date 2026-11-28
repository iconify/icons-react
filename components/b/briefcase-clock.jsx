import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hgdi6jkqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hgdi6jkqi"/>`,
		"fallback": "noviair:briefcase-clock",
	});
}

export default Component;
