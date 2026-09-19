import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gol34_mdy.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gol34_mdy"/>`,
		"fallback": "fa-brands:creative-commons-by",
	});
}

export default Component;
