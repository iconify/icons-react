import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sy18rac_x.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sy18rac_x"/>`,
		"fallback": "pullo:folder-arrow-up-thin",
	});
}

export default Component;
