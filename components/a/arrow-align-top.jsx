import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/y/yt7y4i.css';
import '../../css/l/ldl8un.css';
import '../../css/f/fxer1q.css';
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
		"content": `<path class="a0m25c yt7y4i"/><path class="a0m25c ldl8un"/><path class="a0m25c fxer1q"/>`,
		"fallback": "line-md:arrow-align-top",
	});
}

export default Component;
