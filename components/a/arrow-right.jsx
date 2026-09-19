import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k9es34bvp.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k9es34bvp"/>`,
		"fallback": "el:arrow-right",
	});
}

export default Component;
