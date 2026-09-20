import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/m/m4m3gq.css';
import '../../css/r/rxilrc.css';
import '../../css/d/d-gf8qwu.css';
import '../../css/s/so-from-60.css';
import '../../css/d/d-t2yz9y.css';
import '../../css/f/fade-to-1.css';
import '../../css/s/so-from-6.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c m4m3gq"/><path class="a0m25c rxilrc"/>`,
		"fallback": "line-md:cloud-alt-tags-loop",
	});
}

export default Component;
