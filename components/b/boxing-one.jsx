import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y5cg8fb9r.css';
import '../../css/v/v7_zg0b3e.css';
import '../../css/e/eoes09bhp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y5cg8fb9r"><path class="v7_zg0b3e"/><path class="eoes09bhp"/></g>`,
		"fallback": "icon-park-outline:boxing-one",
	});
}

export default Component;
