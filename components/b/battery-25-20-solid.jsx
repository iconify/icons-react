import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bhriw0pwu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bhriw0pwu"/>`,
		"fallback": "sidekickicons:battery-25-20-solid",
	});
}

export default Component;
