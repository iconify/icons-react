import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kv5x-cwmv.css';
import '../../css/e/eqk6tsbgq.css';
import '../../css/f/fwalanilb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kv5x-cwmv"/><path class="eqk6tsbgq"/><path clip-rule="evenodd" class="fwalanilb"/></g>`,
		"fallback": "streamline-plump-color:chef-toque-hat-flat",
	});
}

export default Component;
