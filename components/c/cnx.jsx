import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/d/dg4d_poch.css';
import '../../css/n/n1mjunbsu.css';
import '../../css/k/k5darrm3j.css';
import '../../css/p/p6g_r5ogo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="dg4d_poch"/><g class="n1mjunbsu"><path class="k5darrm3j"/><path class="p6g_r5ogo"/></g></g>`,
		"fallback": "cryptocurrency-color:cnx",
	});
}

export default Component;
