import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tpdql_bdg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tpdql_bdg"/>`,
		"fallback": "hugeicons:chart-no-axes-column",
	});
}

export default Component;
