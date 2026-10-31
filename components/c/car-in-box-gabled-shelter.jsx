import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b0acmdbqf.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b0acmdbqf"/>`,
		"fallback": "pinhead:car-in-box-gabled-shelter",
	});
}

export default Component;
