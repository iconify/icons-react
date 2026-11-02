import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ey4hq3keo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ey4hq3keo"/>`,
		"fallback": "sidekickicons:gender-male-20-solid",
	});
}

export default Component;
