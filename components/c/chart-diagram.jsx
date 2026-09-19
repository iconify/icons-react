import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ium9azweu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ium9azweu"/>`,
		"fallback": "fa6-solid:chart-diagram",
	});
}

export default Component;
