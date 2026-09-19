import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/or1av_2jo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="or1av_2jo"/>`,
		"fallback": "ci:home-x",
	});
}

export default Component;
