import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/enco1glmf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="enco1glmf"/>`,
		"fallback": "thesvg:creative-commons",
	});
}

export default Component;
