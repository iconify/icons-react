import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hbpmk898z.css';
import '../../css/b/bkgpz5bbo.css';
import '../../css/e/eh8g-3fgw.css';
import '../../css/a/a00qaqbxf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hbpmk898z"/><path class="bkgpz5bbo"/><path class="eh8g-3fgw"/><path class="a00qaqbxf"/>`,
		"fallback": "energy-icons:frost-20-bold",
	});
}

export default Component;
