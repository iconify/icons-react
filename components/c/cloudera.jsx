import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/paoeq8blj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="paoeq8blj"/>`,
		"fallback": "thesvg-color:cloudera",
	});
}

export default Component;
