import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kdxmgm20z.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="kdxmgm20z"/>`,
		"fallback": "garden:circle-sm-fill-12",
	});
}

export default Component;
