import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hz6astb5h.css';

const viewBox = {"width":1536,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hz6astb5h"/>`,
		"fallback": "fa:hourglass-1",
	});
}

export default Component;
