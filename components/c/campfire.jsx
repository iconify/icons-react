import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aow6-7bvp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aow6-7bvp"/>`,
		"fallback": "tabler:campfire",
	});
}

export default Component;
