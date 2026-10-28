import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ilma5fblg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ilma5fblg"/>`,
		"fallback": "vadivam:arrow-left-from-line",
	});
}

export default Component;
