import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/txf-yabmw.css';
import '../../css/w/ww3moibix.css';
import '../../css/s/sek3yjq5i.css';
import '../../css/a/aw5yo8b1d.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="txf-yabmw"/><path class="ww3moibix"/><path class="sek3yjq5i"/><path clip-rule="evenodd" class="aw5yo8b1d"/></g>`,
		"fallback": "glyphs:globe-stand-west-bold",
	});
}

export default Component;
