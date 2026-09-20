import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b244-_biw.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b244-_biw"/>`,
		"fallback": "pinhead:alabama-with-capital-star",
	});
}

export default Component;
