import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j05mr2p2e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j05mr2p2e"/>`,
		"fallback": "sidekickicons:floppy-disk-solid",
	});
}

export default Component;
