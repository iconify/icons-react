import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wd-ix_sxa.css';
import '../../css/s/sr4vmxeka.css';
import '../../css/j/jfj7f4i1i.css';
import '../../css/p/psdlb_boe.css';
import '../../css/l/l_fyul_7f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wd-ix_sxa"><path class="sr4vmxeka"/><path class="jfj7f4i1i"/><path class="psdlb_boe"/><path class="l_fyul_7f"/></g>`,
		"fallback": "icon-park:add-pic",
	});
}

export default Component;
