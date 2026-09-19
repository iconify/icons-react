import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/d/du5ugufva.css';
import '../../css/x/xdxgcd4hh.css';
import '../../css/u/ui44u43fe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="du5ugufva"/><path class="xdxgcd4hh"/><path class="ui44u43fe"/></g>`,
		"fallback": "bitcoin-icons:bitcoin-outline",
	});
}

export default Component;
