import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/k/k__vmq.css';
import '../../css/r/rje0ii.css';
import '../../css/u/ul_dtz.css';
import '../../css/e/e7acus.css';
import '../../css/s/so-from-60.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c k__vmq"/><path class="a0m25c rje0ii"/><path class="a0m25c ul_dtz"/><path class="a0m25c e7acus"/>`,
		"fallback": "line-md:emoji-smile",
	});
}

export default Component;
