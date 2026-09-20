import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k1eqt2byc.css';

const viewBox = {"width":8,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k1eqt2byc"/>`,
		"fallback": "octicon:chevron-left",
	});
}

export default Component;
