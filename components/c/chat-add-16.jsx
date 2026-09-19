import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ng6cpqs6v.css';
import '../../css/v/vyyezkb4r.css';
import '../../css/o/ol7cejbxg.css';
import '../../css/g/gsug0sx0f.css';
import '../../css/o/o83_pnvzi.css';
import '../../css/t/tim377m3x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path fill="url(#SVGigWtqolH)" class="ng6cpqs6v"/><path fill="url(#SVGx3b7smvo)" class="vyyezkb4r"/><defs><linearGradient id="SVGigWtqolH" x1="2.429" x2="12.905" y1="4.25" y2="22.111" gradientUnits="userSpaceOnUse"><stop class="ol7cejbxg"/><stop offset="1" class="gsug0sx0f"/></linearGradient><linearGradient id="SVGx3b7smvo" x1="5.525" x2="6.522" y1="5.105" y2="11.536" gradientUnits="userSpaceOnUse"><stop class="o83_pnvzi"/><stop offset="1" class="tim377m3x"/></linearGradient></defs></g>`,
		"fallback": "fluent-color:chat-add-16",
	});
}

export default Component;
