import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g88b9_bay.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g88b9_bay"/>`,
		"fallback": "thesvg-color:bitbucket",
	});
}

export default Component;
