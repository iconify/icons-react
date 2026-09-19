import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ac7gi5bnu.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ac7gi5bnu"/>`,
		"fallback": "gis:arrow-o",
	});
}

export default Component;
