import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yk3cyc-gp.css';

const viewBox = {"width":416,"height":488};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yk3cyc-gp"/>`,
		"fallback": "ps:gdgt",
	});
}

export default Component;
