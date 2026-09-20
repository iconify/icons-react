import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/unl4ioy1a.css';
import '../../css/u/u27h525fw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="unl4ioy1a"/><path class="u27h525fw"/>`,
		"fallback": "selfhst:inkscape",
	});
}

export default Component;
