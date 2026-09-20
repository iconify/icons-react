import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qi_scccbv.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qi_scccbv"/>`,
		"fallback": "pinhead:bicycle-and-peso",
	});
}

export default Component;
