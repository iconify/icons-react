import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ube0ylbed.css';
import '../../css/d/d73ovybpc.css';
import '../../css/u/upkzhhbkg.css';
import '../../css/f/f-ozn4blu.css';
import '../../css/m/m-3w7fb6z.css';
import '../../css/h/h-u7p0bzv.css';
import '../../css/t/tpp_zt08c.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ube0ylbed"/><path class="d73ovybpc"/><path class="upkzhhbkg"/><path class="f-ozn4blu"/><path class="m-3w7fb6z"/><path class="h-u7p0bzv"/><path class="tpp_zt08c"/>`,
		"fallback": "tabler-flags:comoros",
	});
}

export default Component;
