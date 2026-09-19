import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c13bt8b3z.css';
import '../../css/l/lgvvujlva.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c13bt8b3z"/><path class="lgvvujlva"/>`,
		"fallback": "famicons:hand-left-outline",
	});
}

export default Component;
