import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/v/vaqxm-bfv.css';
import '../../css/c/c4xrn0b2o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><rect class="vaqxm-bfv"/><path class="c4xrn0b2o"/></g>`,
		"fallback": "icon-park:align-left",
	});
}

export default Component;
