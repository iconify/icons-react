import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/w/wei0kabfr.css';
import '../../css/f/fzclu0grq.css';
import '../../css/p/p36qdbmvb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="wei0kabfr"/><path class="fzclu0grq"/><path class="p36qdbmvb"/></g>`,
		"fallback": "streamline-sharp-color:chef-toque-hat",
	});
}

export default Component;
