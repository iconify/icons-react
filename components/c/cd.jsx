import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/t/tqw8k0f0r.css';
import '../../css/u/un_5co41a.css';
import '../../css/n/n0_i2bckx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><circle class="tqw8k0f0r"/><path class="un_5co41a"/><circle class="n0_i2bckx"/></g>`,
		"fallback": "icon-park:cd",
	});
}

export default Component;
