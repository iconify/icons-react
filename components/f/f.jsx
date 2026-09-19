import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/orxitfbis.css';

const viewBox = {"width":255,"height":754};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="orxitfbis"/>`,
		"fallback": "ls:f",
	});
}

export default Component;
