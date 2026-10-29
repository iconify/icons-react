import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/hcigp2gnt.css';
import '../../css/k/kgga2ny9o.css';
import '../../css/t/tjlpedbiu.css';
import '../../css/l/lh_y89hot.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="hcigp2gnt"/><path class="kgga2ny9o wm-a"/><path class="tjlpedbiu wm-a"/><path class="lh_y89hot"/></g>`,
		"fallback": "withicons:holly-duo",
	});
}

export default Component;
