import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zsams5bxc.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zsams5bxc"/>`,
		"fallback": "fa6-solid:hat-cowboy-side",
	});
}

export default Component;
