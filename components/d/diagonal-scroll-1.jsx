import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/k/ksvo5_zom.css';
import '../../css/j/jp1edgcnz.css';
import '../../css/r/r4qm5gb5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="ksvo5_zom"/><path class="jp1edgcnz"/><path class="r4qm5gb5i"/></g>`,
		"fallback": "streamline-sharp-color:diagonal-scroll-1",
	});
}

export default Component;
