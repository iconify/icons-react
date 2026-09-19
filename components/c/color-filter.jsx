import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/b/bpuab2biq.css';
import '../../css/t/to3zn2b6e.css';
import '../../css/f/frzthrb6v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="bpuab2biq"/><path class="to3zn2b6e"/><path class="frzthrb6v"/></g>`,
		"fallback": "icon-park:color-filter",
	});
}

export default Component;
