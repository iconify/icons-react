import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a5o_y4bdy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a5o_y4bdy"/>`,
		"fallback": "sidekickicons:floppy-disk-20-solid",
	});
}

export default Component;
