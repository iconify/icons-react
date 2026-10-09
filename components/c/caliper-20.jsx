import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/myx735bdk.css';
import '../../css/g/gfw7ev9fg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="myx735bdk"/><path class="gfw7ev9fg"/>`,
		"fallback": "energy-icons:caliper-20",
	});
}

export default Component;
