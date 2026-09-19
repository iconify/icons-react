import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ih88xyvhi.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ih88xyvhi"/>`,
		"fallback": "dinkie-icons:bo-blog",
	});
}

export default Component;
