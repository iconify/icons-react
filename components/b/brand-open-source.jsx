import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ruq-cxb_c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ruq-cxb_c"/>`,
		"fallback": "tabler:brand-open-source",
	});
}

export default Component;
