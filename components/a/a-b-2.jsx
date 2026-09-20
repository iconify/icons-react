import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ahr-1eb0f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ahr-1eb0f"/>`,
		"fallback": "tabler:a-b-2",
	});
}

export default Component;
