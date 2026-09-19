import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/parsp50es.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="parsp50es"/>`,
		"fallback": "icon-park:come",
	});
}

export default Component;
