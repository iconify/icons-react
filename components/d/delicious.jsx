import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mj-udt_6f.css';

const viewBox = {"width":655,"height":674};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mj-udt_6f"/>`,
		"fallback": "ls:delicious",
	});
}

export default Component;
