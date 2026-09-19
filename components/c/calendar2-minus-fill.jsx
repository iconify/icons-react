import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/znt2fn3zw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="znt2fn3zw"/>`,
		"fallback": "bi:calendar2-minus-fill",
	});
}

export default Component;
