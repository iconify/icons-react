import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/afkvrrboz.css';
import '../../css/q/qekqfrbpb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="afkvrrboz"/><path class="qekqfrbpb"/>`,
		"fallback": "energy-icons:corner-left-up-20-bold",
	});
}

export default Component;
