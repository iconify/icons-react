import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bvqwwe6ij.css';
import '../../css/g/guc_2ccot.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bvqwwe6ij"/><path class="guc_2ccot"/>`,
		"fallback": "cryptocurrency:aion",
	});
}

export default Component;
