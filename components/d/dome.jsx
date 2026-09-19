import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/asf7d5wcf.css';
import '../../css/o/o6wf_jbpf.css';
import '../../css/e/evm9jdbvn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="asf7d5wcf"/><path class="o6wf_jbpf"/><path class="evm9jdbvn"/></g>`,
		"fallback": "hugeicons:dome",
	});
}

export default Component;
