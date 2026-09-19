import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bhf_bmb5y.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bhf_bmb5y"/>`,
		"fallback": "fa7-solid:droplet-slash",
	});
}

export default Component;
