import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pxupk9b3y.css';
import '../../css/s/s7jpndbov.css';
import '../../css/l/l22o7lgsh.css';
import '../../css/w/wje_iebly.css';
import '../../css/d/do9nlqb-z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pxupk9b3y"/><path class="s7jpndbov"/><path class="l22o7lgsh"/><path class="wje_iebly"/><path class="do9nlqb-z"/>`,
		"fallback": "energy-icons:ev-fleet-48",
	});
}

export default Component;
