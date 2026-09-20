import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m1ms6ll0d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m1ms6ll0d"/>`,
		"fallback": "sidekickicons:archive-box-arrow-up-16-solid",
	});
}

export default Component;
