import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv49c2bhl.css';
import '../../css/s/sw90srnhq.css';
import '../../css/i/iebf_nbxt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sv49c2bhl"/><path class="sw90srnhq"/><path class="iebf_nbxt"/>`,
		"fallback": "mingcute:counter-2-line",
	});
}

export default Component;
