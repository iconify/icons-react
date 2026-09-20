import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/h/hqqa_ubhn.css';
import '../../css/f/fv__vyeld.css';
import '../../css/s/sltn4qbia.css';
import '../../css/k/k9rtv2gam.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="hqqa_ubhn"/><path class="fv__vyeld"/><path class="sltn4qbia"/><path class="k9rtv2gam"/></g>`,
		"fallback": "streamline-sharp-color:empty-clipboard",
	});
}

export default Component;
