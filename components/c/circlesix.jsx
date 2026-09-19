import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k1tw9_spv.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k1tw9_spv"/>`,
		"fallback": "whh:circlesix",
	});
}

export default Component;
