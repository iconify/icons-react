import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kl7-9-bsf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kl7-9-bsf"/>`,
		"fallback": "octicon:file-media-16",
	});
}

export default Component;
