import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kavpqk8gq.css';
import '../../css/b/btyv-wgod.css';
import '../../css/m/mxcp9pujd.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="kavpqk8gq"><path class="btyv-wgod"/><path class="mxcp9pujd"/></g>`,
		"fallback": "teenyicons:cog-outline",
	});
}

export default Component;
