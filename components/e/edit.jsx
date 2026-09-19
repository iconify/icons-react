import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/if7zwef8z.css';
import '../../css/b/bth-2hbjx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="if7zwef8z"/><path class="bth-2hbjx"/>`,
		"fallback": "boxicons:edit",
	});
}

export default Component;
