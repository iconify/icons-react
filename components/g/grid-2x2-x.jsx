import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yxf16j32g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yxf16j32g"/>`,
		"fallback": "vadivam:grid-2x2-x",
	});
}

export default Component;
