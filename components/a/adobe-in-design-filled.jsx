import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mvqsycc6i.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mvqsycc6i"/>`,
		"fallback": "dinkie-icons:adobe-in-design-filled",
	});
}

export default Component;
