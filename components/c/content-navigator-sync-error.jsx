import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g232_jeaf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g232_jeaf"/>`,
		"fallback": "carbon:content-navigator-sync-error",
	});
}

export default Component;
