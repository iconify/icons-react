import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jvp-9fuxf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jvp-9fuxf"/>`,
		"fallback": "tabler:circle-dashed-letter-t",
	});
}

export default Component;
