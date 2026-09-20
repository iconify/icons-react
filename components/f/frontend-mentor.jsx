import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eqcft6fyk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eqcft6fyk"/>`,
		"fallback": "thesvg:frontend-mentor",
	});
}

export default Component;
