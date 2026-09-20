import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tcymdsb4n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tcymdsb4n"/>`,
		"fallback": "tabler:arrow-left-from-arc",
	});
}

export default Component;
