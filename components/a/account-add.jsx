import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/h/haw7oj.css';
import '../../css/p/ppgzfw.css';
import '../../css/x/x5jt8i.css';
import '../../css/g/g5y2dq.css';
import '../../css/s/so-from-22.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c haw7oj"/><path class="a0m25c ppgzfw"/><path class="a0m25c x5jt8i"/><path class="a0m25c g5y2dq"/>`,
		"fallback": "line-md:account-add",
	});
}

export default Component;
