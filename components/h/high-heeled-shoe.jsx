import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ms0e8vi6e.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ms0e8vi6e"/>`,
		"fallback": "dinkie-icons:high-heeled-shoe",
	});
}

export default Component;
