import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/w/wu45p669j.css';
import '../../css/k/kv1gi7bvd.css';
import '../../css/v/vxcjyw6ru.css';
import '../../css/n/nq6_57wwm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path clip-rule="evenodd" class="wu45p669j"/><path class="kv1gi7bvd"/><path clip-rule="evenodd" class="vxcjyw6ru"/><path class="nq6_57wwm"/></g>`,
		"fallback": "streamline-sharp-color:dark-display-mode",
	});
}

export default Component;
