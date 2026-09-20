import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s-8tu9-dm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s-8tu9-dm"/>`,
		"fallback": "tabler:arrows-diagonal-minimize-2",
	});
}

export default Component;
