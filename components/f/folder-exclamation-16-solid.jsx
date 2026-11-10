import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kajv0hbzq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kajv0hbzq"/>`,
		"fallback": "sidekickicons:folder-exclamation-16-solid",
	});
}

export default Component;
