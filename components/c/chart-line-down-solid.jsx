import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_tky7bfu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t_tky7bfu"/>`,
		"fallback": "sidekickicons:chart-line-down-solid",
	});
}

export default Component;
