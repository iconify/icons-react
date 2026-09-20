import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uq_tbluok.css';
import '../../css/q/qcret227i.css';
import '../../css/z/zsyn02zgx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uq_tbluok"/><path clip-rule="evenodd" class="qcret227i"/><path clip-rule="evenodd" class="zsyn02zgx"/>`,
		"fallback": "streamline-plump:bitcoin-circle-1-solid",
	});
}

export default Component;
