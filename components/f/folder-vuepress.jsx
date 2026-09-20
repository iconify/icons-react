import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ll11jkzwr.css';
import '../../css/n/n7afpq_ej.css';
import '../../css/p/pjrgz1bag.css';
import '../../css/t/tgzu8obtk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ll11jkzwr"/><path class="n7afpq_ej"/><path class="pjrgz1bag"/><path class="tgzu8obtk"/>`,
		"fallback": "material-icon-theme:folder-vuepress",
	});
}

export default Component;
