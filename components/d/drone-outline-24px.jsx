import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sj78ek-bq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sj78ek-bq"/>`,
		"fallback": "healthicons:drone-outline-24px",
	});
}

export default Component;
