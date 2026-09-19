import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tlqpo7b7g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tlqpo7b7g"/>`,
		"fallback": "bi:bucket-fill",
	});
}

export default Component;
