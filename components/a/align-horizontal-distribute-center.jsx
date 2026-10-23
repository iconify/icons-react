import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d244rff0j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d244rff0j"/>`,
		"fallback": "vadivam:align-horizontal-distribute-center",
	});
}

export default Component;
