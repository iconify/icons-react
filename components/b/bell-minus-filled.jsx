import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wclhac05w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wclhac05w"/>`,
		"fallback": "tabler:bell-minus-filled",
	});
}

export default Component;
