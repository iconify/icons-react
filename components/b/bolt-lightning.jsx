import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xw1itqbzb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xw1itqbzb"/>`,
		"fallback": "reicon:bolt-lightning",
	});
}

export default Component;
