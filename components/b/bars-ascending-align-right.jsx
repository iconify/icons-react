import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ib5_lgbqp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ib5_lgbqp"/>`,
		"fallback": "gravity-ui:bars-ascending-align-right",
	});
}

export default Component;
