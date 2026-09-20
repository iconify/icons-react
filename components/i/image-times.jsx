import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k4j-itpzn.css';
import '../../css/a/azxq-6bij.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k4j-itpzn"/><path class="azxq-6bij"/>`,
		"fallback": "stash:image-times",
	});
}

export default Component;
