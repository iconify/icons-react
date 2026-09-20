import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/uo5h1db1c.css';
import '../../css/f/fvc3h-b5l.css';
import '../../css/l/lx7o3bc4d.css';
import '../../css/j/jrg2peceu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect class="uo5h1db1c"/><circle class="fvc3h-b5l"/><circle class="lx7o3bc4d"/><circle class="jrg2peceu"/></g>`,
		"fallback": "streamline:entertainment-speaker-2-speakers-music-audio",
	});
}

export default Component;
