import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b48qv927b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b48qv927b"/>`,
		"fallback": "vadivam:arrow-down-0-1",
	});
}

export default Component;
