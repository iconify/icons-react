import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gr3gh3_tr.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gr3gh3_tr"/>`,
		"fallback": "pinhead:car-with-peso",
	});
}

export default Component;
