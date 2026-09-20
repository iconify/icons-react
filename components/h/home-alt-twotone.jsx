import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rautda.css';
import '../../css/a/a0m25c.css';
import '../../css/y/yc7hov.css';
import '../../css/l/lagu3m.css';
import '../../css/u/udfy8i.css';
import '../../css/z/zv7ueu.css';
import '../../css/f/fill-to-0.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/s/so-from-18.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rautda"/><path class="a0m25c yc7hov"/><path class="a0m25c lagu3m"/><path class="a0m25c udfy8i"/><path class="a0m25c zv7ueu"/>`,
		"fallback": "line-md:home-alt-twotone",
	});
}

export default Component;
