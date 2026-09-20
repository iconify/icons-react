import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nvve5bzij.css';
import '../../css/u/u9ixn_sru.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nvve5bzij"/><path class="u9ixn_sru"/>`,
		"fallback": "octicon:device-mobile-24",
	});
}

export default Component;
