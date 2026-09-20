import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/v/v5pdlvb2f.css';
import '../../css/r/r4qm5gb5i.css';
import '../../css/d/dy1kbl0rd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path clip-rule="evenodd" class="v5pdlvb2f"/><path class="r4qm5gb5i"/><path class="dy1kbl0rd"/></g>`,
		"fallback": "streamline-sharp-color:cog",
	});
}

export default Component;
