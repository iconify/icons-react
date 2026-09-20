import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g1u97zgbq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g1u97zgbq"/>`,
		"fallback": "octicon:diff-ignored-16",
	});
}

export default Component;
