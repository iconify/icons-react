import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pzuzk3k6y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pzuzk3k6y"/>`,
		"fallback": "streamline-ultimate:engine-temperature-warning",
	});
}

export default Component;
