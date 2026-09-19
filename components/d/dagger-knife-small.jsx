import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fvru_hbqm.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fvru_hbqm"/>`,
		"fallback": "dinkie-icons:dagger-knife-small",
	});
}

export default Component;
