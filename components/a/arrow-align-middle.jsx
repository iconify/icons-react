import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/f/f3rx7t.css';
import '../../css/t/txuwiv.css';
import '../../css/y/yp-liy.css';
import '../../css/s/so-from-20.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c f3rx7t"/><path class="a0m25c txuwiv"/><path class="a0m25c yp-liy"/>`,
		"fallback": "line-md:arrow-align-middle",
	});
}

export default Component;
