import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ei6q48z0x.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ei6q48z0x"/>`,
		"fallback": "pinhead:dog-sitting-wearing-collar-and-whistle",
	});
}

export default Component;
