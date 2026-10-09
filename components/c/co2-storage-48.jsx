import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m8mp0wbzm.css';
import '../../css/r/r1wj_pscx.css';
import '../../css/t/t8srk-ced.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m8mp0wbzm"/><path class="r1wj_pscx"/><path class="t8srk-ced"/>`,
		"fallback": "energy-icons:co2-storage-48",
	});
}

export default Component;
