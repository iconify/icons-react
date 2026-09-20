import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/y/y2h43n.css';
import '../../css/s/sjppje.css';
import '../../css/i/i--0rr.css';
import '../../css/s/so-from-60.css';
import '../../css/s/sw-cnj-zb.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c y2h43n"/><path class="a0m25c sjppje"/><path class="a0m25c i--0rr"/>`,
		"fallback": "line-md:alert-circle-loop",
	});
}

export default Component;
