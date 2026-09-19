import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/v/v549y8b8w.css';
import '../../css/s/sgm2p807k.css';
import '../../css/g/g1em6hxjd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="v549y8b8w"/><path class="sgm2p807k"/><path class="g1em6hxjd"/></g>`,
		"fallback": "icon-park:dog-zodiac",
	});
}

export default Component;
