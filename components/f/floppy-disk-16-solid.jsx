import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qncigyyhy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qncigyyhy"/>`,
		"fallback": "sidekickicons:floppy-disk-16-solid",
	});
}

export default Component;
