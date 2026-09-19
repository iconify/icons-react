import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k3ma6fbgt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k3ma6fbgt"/>`,
		"fallback": "entypo:credit",
	});
}

export default Component;
