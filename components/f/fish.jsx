import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/woup13bgg.css';
import '../../css/s/scdda8sqr.css';
import '../../css/q/qt8553dci.css';
import '../../css/d/dkcwfxbnt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="woup13bgg"/><path class="scdda8sqr"/><path class="qt8553dci"/><path class="dkcwfxbnt"/>`,
		"fallback": "fxemoji:fish",
	});
}

export default Component;
