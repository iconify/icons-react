import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zz5jbmvpq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zz5jbmvpq"/>`,
		"fallback": "ri:draft-fill",
	});
}

export default Component;
