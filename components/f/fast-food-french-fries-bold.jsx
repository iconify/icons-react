import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fs3ip1jeq.css';
import '../../css/n/nnvzu8bqc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fs3ip1jeq"/><path class="nnvzu8bqc"/>`,
		"fallback": "streamline-ultimate:fast-food-french-fries-bold",
	});
}

export default Component;
