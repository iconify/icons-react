import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hac57wbhi.css';
import '../../css/h/hk7lwrn_z.css';
import '../../css/j/jid7bupwf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hac57wbhi"/><path class="hk7lwrn_z"/><path class="jid7bupwf"/>`,
		"fallback": "energy-icons:carbon-credit-48",
	});
}

export default Component;
