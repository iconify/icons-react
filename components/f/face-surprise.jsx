import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/brbyr1_7p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="brbyr1_7p"/>`,
		"fallback": "fa6-regular:face-surprise",
	});
}

export default Component;
