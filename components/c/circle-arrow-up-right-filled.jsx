import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nm2to1brw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nm2to1brw"/>`,
		"fallback": "tabler:circle-arrow-up-right-filled",
	});
}

export default Component;
