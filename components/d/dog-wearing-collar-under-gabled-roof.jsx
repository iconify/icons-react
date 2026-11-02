import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/clvc58_0b.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clvc58_0b"/>`,
		"fallback": "pinhead:dog-wearing-collar-under-gabled-roof",
	});
}

export default Component;
