import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/it6hli.css';
import '../../css/i/iw1iew.css';
import '../../css/j/jvcu3t.css';
import '../../css/f/fill-to-0.css';
import '../../css/d/d-gf8qwu.css';
import '../../css/s/so-from-60.css';
import '../../css/f/fill-to-0_3.css';
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
		"content": `<path class="it6hli iw1iew"/><path class="iw1iew jvcu3t"/>`,
		"fallback": "line-md:cloud-alt-tags-twotone-loop",
	});
}

export default Component;
