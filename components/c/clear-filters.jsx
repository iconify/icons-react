import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jfmav5c8a.css';
import '../../css/k/k1fidk1yd.css';
import '../../css/q/qxqpfx-pk.css';
import '../../css/o/ohp5enpdb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jfmav5c8a"/><path class="k1fidk1yd"/><circle class="qxqpfx-pk"/><path class="ohp5enpdb"/>`,
		"fallback": "flat-color-icons:clear-filters",
	});
}

export default Component;
