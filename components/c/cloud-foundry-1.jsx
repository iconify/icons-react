import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wuf0csw1g.css';
import '../../css/y/y3x4cnbio.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wuf0csw1g"/><path class="y3x4cnbio"/>`,
		"fallback": "carbon:cloud-foundry-1",
	});
}

export default Component;
