import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p4mrs9baa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p4mrs9baa"/>`,
		"fallback": "sidekickicons:checklist",
	});
}

export default Component;
