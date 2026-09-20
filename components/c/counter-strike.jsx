import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tv024--aq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tv024--aq"/>`,
		"fallback": "thesvg:counter-strike",
	});
}

export default Component;
