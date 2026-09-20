import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/n/nh6wfl.css';
import '../../css/y/ywbs5z.css';
import '../../css/r/rakmch.css';
import '../../css/s/so-to-0.css';
import '../../css/s/so-from-10.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c nh6wfl"/><path class="a0m25c ywbs5z"/><path class="a0m25c rakmch"/>`,
		"fallback": "line-md:coffee",
	});
}

export default Component;
