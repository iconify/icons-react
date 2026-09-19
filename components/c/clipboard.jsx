import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/s/spllm2uay.css';
import '../../css/j/jjh4yrbas.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="spllm2uay"/><rect class="jjh4yrbas"/></g>`,
		"fallback": "icon-park:clipboard",
	});
}

export default Component;
