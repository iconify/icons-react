import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eqd2iu2hl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="eqd2iu2hl"/>`,
		"fallback": "sidekickicons:chevron-right-left-solid",
	});
}

export default Component;
