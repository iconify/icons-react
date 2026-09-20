import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/beld5sdfp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="beld5sdfp"/>`,
		"fallback": "lineicons:ban-2",
	});
}

export default Component;
