import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipacrjs3z.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ipacrjs3z"/>`,
		"fallback": "fa7-brands:guilded",
	});
}

export default Component;
