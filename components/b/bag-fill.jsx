import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mbvbu5csx.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mbvbu5csx"/>`,
		"fallback": "f7:bag-fill",
	});
}

export default Component;
