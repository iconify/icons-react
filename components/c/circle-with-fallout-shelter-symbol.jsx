import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dpxmdzbqw.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dpxmdzbqw"/>`,
		"fallback": "pinhead:circle-with-fallout-shelter-symbol",
	});
}

export default Component;
