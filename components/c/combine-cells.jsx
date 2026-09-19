import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eh_u0hjrf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eh_u0hjrf"/>`,
		"fallback": "ci:combine-cells",
	});
}

export default Component;
