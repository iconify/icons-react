import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ue82kj6gk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ue82kj6gk"/>`,
		"fallback": "vadivam:credit-card-x",
	});
}

export default Component;
