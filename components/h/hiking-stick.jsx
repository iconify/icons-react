import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrhr6tbld.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nrhr6tbld"/>`,
		"fallback": "vadivam:hiking-stick",
	});
}

export default Component;
