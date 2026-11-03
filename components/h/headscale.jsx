import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kuf42lb8e.css';
import '../../css/v/v9xhikbmv.css';
import '../../css/q/qcli6r3el.css';
import '../../css/u/uk2m0dkmn.css';
import '../../css/b/bd8l3bdij.css';

const viewBox = {"width":1280,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="kuf42lb8e"><circle transform="matrix(.99728 0 0 1.00556 10.002 -14.823)" class="v9xhikbmv"/><circle transform="matrix(1.01749 0 0 1 -3.158 0)" class="qcli6r3el"/><circle transform="matrix(1.01749 0 0 1 -3.158 115.914)" class="qcli6r3el"/><circle transform="matrix(1.01749 0 0 1 148.43 115.914)" class="qcli6r3el"/><circle transform="matrix(1.01749 0 0 1 148.851 0)" class="qcli6r3el"/><circle transform="matrix(.99196 0 0 1 3.37 -10.246)" class="uk2m0dkmn"/><circle transform="matrix(.99196 0 0 1 255.633 -10.246)" class="uk2m0dkmn"/><path class="bd8l3bdij"/></g>`,
		"fallback": "thesvg-color:headscale",
	});
}

export default Component;
