import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bpxdjib0t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bpxdjib0t"/>`,
		"fallback": "tabler:coin-filled",
	});
}

export default Component;
