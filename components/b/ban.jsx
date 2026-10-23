import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zqy4i4h1f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zqy4i4h1f"/>`,
		"fallback": "vadivam:ban",
	});
}

export default Component;
