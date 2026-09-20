import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h0sarzx0f.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h0sarzx0f"/>`,
		"fallback": "medical-icon:i-restrooms",
	});
}

export default Component;
