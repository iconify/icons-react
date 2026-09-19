import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/awq8skfug.css';
import '../../css/o/o-u5nubvx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="awq8skfug"/><path class="o-u5nubvx"/>`,
		"fallback": "icomoon-free:circle-up",
	});
}

export default Component;
