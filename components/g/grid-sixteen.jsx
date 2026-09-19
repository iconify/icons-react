import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/h/hl30v4bui.css';
import '../../css/o/opb5c-oie.css';
import '../../css/p/pni55bcix.css';
import '../../css/t/tydye05iy.css';
import '../../css/t/tb86w6b9z.css';
import '../../css/z/zsap_l_do.css';
import '../../css/e/euc2_c05j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><rect class="hl30v4bui"/><path class="opb5c-oie"/><path class="pni55bcix"/><path class="tydye05iy"/><path class="tb86w6b9z"/><path class="zsap_l_do"/><path class="euc2_c05j"/></g>`,
		"fallback": "icon-park:grid-sixteen",
	});
}

export default Component;
