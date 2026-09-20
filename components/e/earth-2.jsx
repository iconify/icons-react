import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/m/mhp6nxr5f.css';
import '../../css/b/b5ln64y4n.css';
import '../../css/s/sltgiab_k.css';
import '../../css/r/r-uoj7bks.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="mhp6nxr5f"/><path clip-rule="evenodd" class="b5ln64y4n"/><path class="sltgiab_k"/><path class="r-uoj7bks"/></g>`,
		"fallback": "streamline-sharp-color:earth-2",
	});
}

export default Component;
