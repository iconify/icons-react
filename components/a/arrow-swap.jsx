import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q8a77rbjy.css';
import '../../css/g/gh2npccpo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q8a77rbjy"/><path class="gh2npccpo"/>`,
		"fallback": "ion:arrow-swap",
	});
}

export default Component;
