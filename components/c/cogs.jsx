import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/a/auzy0hbwl.css';
import '../../css/i/ivargsbvq.css';
import '../../css/s/s_6zp33hf.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="auzy0hbwl"/><path class="ivargsbvq"/><path class="s_6zp33hf"/></g>`,
		"fallback": "glyphs:cogs",
	});
}

export default Component;
