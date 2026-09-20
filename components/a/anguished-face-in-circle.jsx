import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b8jp68q7s.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b8jp68q7s"/>`,
		"fallback": "pinhead:anguished-face-in-circle",
	});
}

export default Component;
