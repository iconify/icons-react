import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r498tf0fp.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r498tf0fp"/>`,
		"fallback": "pinhead:belgium-with-capital-star",
	});
}

export default Component;
