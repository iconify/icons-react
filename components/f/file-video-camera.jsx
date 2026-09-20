import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fzd-zfwgv.css';
import '../../css/c/cw2an1bpo.css';
import '../../css/s/s_3a86o0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fzd-zfwgv"/><path class="cw2an1bpo"/><rect class="s_3a86o0b"/></g>`,
		"fallback": "lucide:file-video-camera",
	});
}

export default Component;
