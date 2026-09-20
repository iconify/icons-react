import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ee65k1lyy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ee65k1lyy"/>`,
		"fallback": "stash:burger-arrow-right-light",
	});
}

export default Component;
