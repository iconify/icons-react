import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hg5ozw.css';
import '../../css/i/iw1iew.css';
import '../../css/h/hvae_q.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-60.css';
import '../../css/f/fill-to-0_3.css';
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
		"content": `<path class="hg5ozw iw1iew"/><path class="hvae_q iw1iew"/>`,
		"fallback": "line-md:cloud-alt-tags-twotone",
	});
}

export default Component;
