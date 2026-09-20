import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bnsnj_ymp.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bnsnj_ymp"/>`,
		"fallback": "memory:box-outer-light-dashed-down-left",
	});
}

export default Component;
