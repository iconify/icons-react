import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ke9bzzbux.css';

const viewBox = {"width":870,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ke9bzzbux"/>`,
		"fallback": "fontelico:emo-grin",
	});
}

export default Component;
