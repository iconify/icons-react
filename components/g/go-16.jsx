import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thjka7p4r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="thjka7p4r"/>`,
		"fallback": "nonicons:go-16",
	});
}

export default Component;
