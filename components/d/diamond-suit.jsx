import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lm6m-bc7r.css';
import '../../css/k/kwze97erm.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lm6m-bc7r"/><path class="kwze97erm"/>`,
		"fallback": "openmoji:diamond-suit",
	});
}

export default Component;
