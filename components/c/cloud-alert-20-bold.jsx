import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z55jyj2un.css';
import '../../css/k/kndjxwbkd.css';
import '../../css/m/mb6zn6b4t.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z55jyj2un"/><path class="kndjxwbkd"/><path class="mb6zn6b4t"/>`,
		"fallback": "energy-icons:cloud-alert-20-bold",
	});
}

export default Component;
