import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tl109vbjx.css';
import '../../css/o/obebb25da.css';
import '../../css/q/qzmk87bpw.css';
import '../../css/q/qylfpj-0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tl109vbjx"/><path class="obebb25da"/><path class="qzmk87bpw"/><path class="qylfpj-0m"/></g>`,
		"fallback": "andrsrxn:cashier-off",
	});
}

export default Component;
