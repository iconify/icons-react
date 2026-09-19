import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fqjart1so.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fqjart1so"/>`,
		"fallback": "famicons:hammer",
	});
}

export default Component;
