import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j0_0708wb.css';
import '../../css/b/b768ng9cg.css';
import '../../css/t/ttpih3a4n.css';
import '../../css/h/ht2kccogc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j0_0708wb"/><path class="b768ng9cg"/><path class="ttpih3a4n"/><path class="ht2kccogc"/>`,
		"fallback": "energy-icons:growth-48",
	});
}

export default Component;
