import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kvilx1q3c.css';
import '../../css/h/hcl8-eb4f.css';
import '../../css/s/sx5ndllwv.css';
import '../../css/f/fcfq5abke.css';
import '../../css/b/b4yu45byb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="kvilx1q3c"><path class="hcl8-eb4f"/><path class="sx5ndllwv"/><path class="fcfq5abke"/><path class="b4yu45byb"/></g>`,
		"fallback": "icon-park:all-application",
	});
}

export default Component;
