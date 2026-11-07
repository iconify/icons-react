import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dd-3xmb8r.css';
import '../../css/q/q-9nnzbzb.css';
import '../../css/y/yx8yglt9d.css';
import '../../css/k/kb3qv9b3z.css';
import '../../css/m/mf9o9n5rb.css';
import '../../css/g/gcdh0nb5j.css';
import '../../css/o/ofoifc5pw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dd-3xmb8r"/><path class="q-9nnzbzb"/><path class="yx8yglt9d"/><path class="kb3qv9b3z"/><path class="mf9o9n5rb"/><path class="gcdh0nb5j"/><path class="ofoifc5pw"/>`,
		"fallback": "solar:calculator-outline",
	});
}

export default Component;
