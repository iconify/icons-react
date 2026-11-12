import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x__4p2bap.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x__4p2bap"/>`,
		"fallback": "lucide:asterism",
	});
}

export default Component;
