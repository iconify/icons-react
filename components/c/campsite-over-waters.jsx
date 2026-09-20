import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oyqpj5b7d.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oyqpj5b7d"/>`,
		"fallback": "pinhead:campsite-over-waters",
	});
}

export default Component;
