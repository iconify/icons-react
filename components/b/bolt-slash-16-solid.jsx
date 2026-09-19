import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v9rqdccvt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v9rqdccvt"/>`,
		"fallback": "heroicons:bolt-slash-16-solid",
	});
}

export default Component;
