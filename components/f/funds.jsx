import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/y/ya2a54bmq.css';
import '../../css/x/xco40y0nr.css';
import '../../css/l/lwqu5ebiq.css';
import '../../css/b/bp-fc43ol.css';
import '../../css/t/talgakb_z.css';
import '../../css/c/cy3plyxvp.css';
import '../../css/y/yf-e7hbum.css';
import '../../css/p/pcrtnqpyg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><ellipse class="ya2a54bmq"/><path class="xco40y0nr"/><path class="lwqu5ebiq"/><path class="bp-fc43ol"/><path class="talgakb_z"/><ellipse class="cy3plyxvp"/><path class="yf-e7hbum"/><path class="pcrtnqpyg"/></g>`,
		"fallback": "icon-park-outline:funds",
	});
}

export default Component;
