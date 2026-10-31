import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ny-96bjvq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ny-96bjvq"/>`,
		"fallback": "sidekickicons:checklist-16-solid",
	});
}

export default Component;
