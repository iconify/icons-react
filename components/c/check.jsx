import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z1btt3j3a.css';

const viewBox = {"width":12,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z1btt3j3a"/>`,
		"fallback": "octicon:check",
	});
}

export default Component;
