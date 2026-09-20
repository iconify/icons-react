import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/y/y2yexxbvt.css';
import '../../css/x/xh27o9bqv.css';
import '../../css/x/xj23yy91a.css';
import '../../css/o/oa85sry3e.css';
import '../../css/t/tu818ug5p.css';
import '../../css/s/sisie5b5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="y2yexxbvt"/><path class="xh27o9bqv"/><path class="xj23yy91a"/><path class="oa85sry3e"/><path class="tu818ug5p"/><path class="sisie5b5i"/></g>`,
		"fallback": "streamline-sharp-color:custom-feeds-like-favorite",
	});
}

export default Component;
