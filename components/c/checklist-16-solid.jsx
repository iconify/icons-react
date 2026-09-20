import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zbflqv4vi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zbflqv4vi"/>`,
		"fallback": "sidekickicons:checklist-16-solid",
	});
}

export default Component;
