import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/at_f167ep.css';
import '../../css/v/v0iix4bqd.css';
import '../../css/i/iulpltu0r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="at_f167ep"/><path class="v0iix4bqd"/><path class="iulpltu0r"/></g>`,
		"fallback": "hugeicons:cash-01",
	});
}

export default Component;
