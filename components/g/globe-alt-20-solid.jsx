import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m2p5n4w2t.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m2p5n4w2t"/>`,
		"fallback": "heroicons:globe-alt-20-solid",
	});
}

export default Component;
