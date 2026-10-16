import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t35y8l_oe.css';
import '../../css/e/eayms5glv.css';
import '../../css/a/ak91a16sz.css';
import '../../css/j/jx3_n8bgt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t35y8l_oe"/><path class="eayms5glv"/><path class="ak91a16sz"/><path class="jx3_n8bgt"/>`,
		"fallback": "energy-icons:greenhouse-effect-48-bold",
	});
}

export default Component;
