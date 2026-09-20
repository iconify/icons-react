import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/e/elbkwnsxd.css';
import '../../css/x/xa9yzqbvd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="elbkwnsxd"/><path class="xa9yzqbvd"/></g>`,
		"fallback": "streamline-plump:cable-split",
	});
}

export default Component;
