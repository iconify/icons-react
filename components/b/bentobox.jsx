import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/goh2tulvc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="goh2tulvc"/>`,
		"fallback": "thesvg-color:bentobox",
	});
}

export default Component;
