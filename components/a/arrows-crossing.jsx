import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x1bk5vb5y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x1bk5vb5y"/>`,
		"fallback": "sidekickicons:arrows-crossing",
	});
}

export default Component;
