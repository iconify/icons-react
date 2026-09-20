import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/ibcz29bif.css';
import '../../css/s/s78gi4v_f.css';
import '../../css/r/rj2y4vkzd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ibcz29bif"/><path class="s78gi4v_f"/><path class="rj2y4vkzd"/></g>`,
		"fallback": "keyline-icons:airpods-duotone",
	});
}

export default Component;
