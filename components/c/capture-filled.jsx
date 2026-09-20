import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aow3f85ir.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aow3f85ir"/>`,
		"fallback": "tabler:capture-filled",
	});
}

export default Component;
