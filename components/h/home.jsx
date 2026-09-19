import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z22_sqa8n.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z22_sqa8n"/>`,
		"fallback": "icomoon-free:home",
	});
}

export default Component;
