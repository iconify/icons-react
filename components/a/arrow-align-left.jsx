import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/u/umd-9o.css';
import '../../css/d/dzrx5u.css';
import '../../css/b/b-wk_d.css';
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
		"content": `<path class="a0m25c umd-9o"/><path class="a0m25c dzrx5u"/><path class="a0m25c b-wk_d"/>`,
		"fallback": "line-md:arrow-align-left",
	});
}

export default Component;
