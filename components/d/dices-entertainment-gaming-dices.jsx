import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/y/yl48r-bud.css';
import '../../css/y/ypz-jachr.css';
import '../../css/g/gm81x5ikh.css';
import '../../css/f/fwt7-pbvy.css';
import '../../css/r/rvxzrubmd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="yl48r-bud"/><path class="ypz-jachr"/><path class="gm81x5ikh"/><path class="fwt7-pbvy"/><path class="rvxzrubmd"/></g>`,
		"fallback": "streamline-plump-color:dices-entertainment-gaming-dices",
	});
}

export default Component;
