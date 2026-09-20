import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/etmy83b_j.css';
import '../../css/b/bt5j-db6v.css';
import '../../css/d/d4b6rfb4h.css';
import '../../css/q/q2g8hjs-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path clip-rule="evenodd" class="etmy83b_j"/><path class="bt5j-db6v"/><path clip-rule="evenodd" class="d4b6rfb4h"/><path class="q2g8hjs-f"/></g>`,
		"fallback": "streamline-logos:google-fit-logo",
	});
}

export default Component;
