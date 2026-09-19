import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x94kw1bph.css';

const viewBox = {"width":336,"height":488};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x94kw1bph"/>`,
		"fallback": "ps:gowalla",
	});
}

export default Component;
