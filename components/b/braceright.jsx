import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r08ed1f0f.css';

const viewBox = {"width":289,"height":960};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r08ed1f0f"/>`,
		"fallback": "ls:braceright",
	});
}

export default Component;
