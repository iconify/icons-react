import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yv-jdh-qw.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yv-jdh-qw"/>`,
		"fallback": "glyphs:battery-0-bold",
	});
}

export default Component;
