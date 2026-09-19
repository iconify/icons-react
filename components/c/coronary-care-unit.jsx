import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y4u0dd6fq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y4u0dd6fq"/>`,
		"fallback": "healthicons:coronary-care-unit",
	});
}

export default Component;
