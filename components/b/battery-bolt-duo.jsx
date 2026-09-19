import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n77u17bxl.css';
import '../../css/k/k885mybol.css';
import '../../css/n/n9z_vqbki.css';
import '../../css/a/a-li4fbcy.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="n77u17bxl"/><path class="k885mybol"/><path clip-rule="evenodd" class="n9z_vqbki"/><path class="a-li4fbcy"/></g>`,
		"fallback": "glyphs:battery-bolt-duo",
	});
}

export default Component;
