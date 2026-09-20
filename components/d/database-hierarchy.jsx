import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a5gu50boq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a5gu50boq"/>`,
		"fallback": "streamline-freehand:database-hierarchy",
	});
}

export default Component;
