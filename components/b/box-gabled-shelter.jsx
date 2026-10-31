import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uj35rnq-g.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uj35rnq-g"/>`,
		"fallback": "pinhead:box-gabled-shelter",
	});
}

export default Component;
