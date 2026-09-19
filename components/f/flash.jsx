import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ai7padzmw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ai7padzmw"/>`,
		"fallback": "famicons:flash",
	});
}

export default Component;
