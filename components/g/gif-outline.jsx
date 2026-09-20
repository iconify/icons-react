import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/beqa1gb_p.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="beqa1gb_p"/>`,
		"fallback": "teenyicons:gif-outline",
	});
}

export default Component;
