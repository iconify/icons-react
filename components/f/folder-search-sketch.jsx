import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/ra7gopb2d.css';
import '../../css/t/tfkrzecse.css';
import '../../css/r/rb4930b7e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ra7gopb2d"/><path class="tfkrzecse wm-k"/><path class="rb4930b7e wm-a"/></g>`,
		"fallback": "withicons:folder-search-sketch",
	});
}

export default Component;
