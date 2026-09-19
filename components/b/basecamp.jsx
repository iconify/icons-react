import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tjv5ijdmj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tjv5ijdmj"/>`,
		"fallback": "icomoon-free:basecamp",
	});
}

export default Component;
