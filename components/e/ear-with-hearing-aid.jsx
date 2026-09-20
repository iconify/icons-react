import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dk6a6dbmw.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dk6a6dbmw"/>`,
		"fallback": "pinhead:ear-with-hearing-aid",
	});
}

export default Component;
