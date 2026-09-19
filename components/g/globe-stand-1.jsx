import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/v/vezelzblp.css';
import '../../css/s/s_na8yd8p.css';
import '../../css/n/nn3tqgwrl.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="vezelzblp"/><path class="s_na8yd8p"/><path class="nn3tqgwrl"/></g>`,
		"fallback": "glyphs:globe-stand-1",
	});
}

export default Component;
