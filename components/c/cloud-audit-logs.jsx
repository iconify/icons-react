import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f9evpcb4o.css';
import '../../css/q/qsuvseb-y.css';
import '../../css/s/syy27hbbu.css';
import '../../css/i/i7sr6ubzr.css';
import '../../css/q/qkc2qdi9h.css';
import '../../css/c/cox6gfr-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f9evpcb4o"/><path class="qsuvseb-y"/><path class="syy27hbbu"/><path class="i7sr6ubzr"/><path class="qkc2qdi9h"/><path class="cox6gfr-d"/>`,
		"fallback": "gcp:cloud-audit-logs",
	});
}

export default Component;
