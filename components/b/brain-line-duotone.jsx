import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/spkxxqb6w.css';
import '../../css/b/b7xb3lbdv.css';
import '../../css/j/jedtkeb6b.css';
import '../../css/m/mu6oepxmt.css';
import '../../css/d/d2_mkkdnx.css';
import '../../css/n/ng4b87bun.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="spkxxqb6w"/><path class="b7xb3lbdv"/><path class="jedtkeb6b"/><path class="mu6oepxmt"/><path class="d2_mkkdnx"/><path class="ng4b87bun"/></g>`,
		"fallback": "solar:brain-line-duotone",
	});
}

export default Component;
