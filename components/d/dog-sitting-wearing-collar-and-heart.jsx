import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z9fx__esr.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z9fx__esr"/>`,
		"fallback": "pinhead:dog-sitting-wearing-collar-and-heart",
	});
}

export default Component;
