import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b6hqqmb3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b6hqqmb3s"/>`,
		"fallback": "coolicons:chevron-right-small-duocolor-round",
	});
}

export default Component;
