import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/safjdmb5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="safjdmb5j"/>`,
		"fallback": "heroicons-outline:arrow-circle-left",
	});
}

export default Component;
