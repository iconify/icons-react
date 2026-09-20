import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ingufyn2w.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ingufyn2w"/>`,
		"fallback": "sidekickicons:headphones-slash-16-solid",
	});
}

export default Component;
