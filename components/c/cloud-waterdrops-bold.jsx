import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s605fxbhp.css';
import '../../css/f/fvrnvdc0s.css';
import '../../css/n/neb4kjwuq.css';
import '../../css/t/tbmfh8b2k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s605fxbhp"/><path class="fvrnvdc0s"/><path class="neb4kjwuq"/><path class="tbmfh8b2k"/>`,
		"fallback": "solar:cloud-waterdrops-bold",
	});
}

export default Component;
