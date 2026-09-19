import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/thjqxcbko.css';
import '../../css/s/szm-i86fs.css';
import '../../css/l/lt7gces4x.css';
import '../../css/v/vxgnncc0p.css';
import '../../css/r/r6w0b87ef.css';
import '../../css/u/ui46oacyp.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="thjqxcbko"/><path clip-rule="evenodd" class="szm-i86fs"/><path class="lt7gces4x"/><path class="vxgnncc0p"/><path clip-rule="evenodd" class="r6w0b87ef"/><path class="ui46oacyp"/></g>`,
		"fallback": "glyphs:cloudy-partly-outline",
	});
}

export default Component;
