import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uyr_xvayy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uyr_xvayy"/>`,
		"fallback": "lucide:hiking-stick",
	});
}

export default Component;
