import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/g/g3shrbbbg.css';
import '../../css/s/so9--0nkn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="g3shrbbbg"/><path class="so9--0nkn"/></g>`,
		"fallback": "icon-park-outline:aperture-priority",
	});
}

export default Component;
