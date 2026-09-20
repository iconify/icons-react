import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/y/yt7y4i.css';
import '../../css/v/vmy1_d.css';
import '../../css/v/vmphcs.css';
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
		"content": `<path class="a0m25c yt7y4i"/><path class="a0m25c vmy1_d"/><path class="a0m25c vmphcs"/>`,
		"fallback": "line-md:arrow-open-down",
	});
}

export default Component;
