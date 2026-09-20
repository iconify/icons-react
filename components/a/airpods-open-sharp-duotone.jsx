import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/n/n2lht5b1f.css';
import '../../css/j/jyrpkpb6l.css';
import '../../css/r/rj2y4vkzd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="n2lht5b1f"/><path class="jyrpkpb6l"/><path class="rj2y4vkzd"/></g>`,
		"fallback": "keyline-icons:airpods-open-sharp-duotone",
	});
}

export default Component;
