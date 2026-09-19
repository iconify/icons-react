import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oeaogk41p.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oeaogk41p"/>`,
		"fallback": "f7:arrow-turn-up-right",
	});
}

export default Component;
