import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/weuip4crh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="weuip4crh"/>`,
		"fallback": "sidekickicons:gender-female-16-solid",
	});
}

export default Component;
