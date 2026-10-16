import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l7vsp1bys.css';
import '../../css/u/u2bj5pb5k.css';
import '../../css/l/lutt4cc1w.css';
import '../../css/d/d8c64zbxv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l7vsp1bys"/><path class="u2bj5pb5k"/><path class="lutt4cc1w"/><path class="d8c64zbxv"/>`,
		"fallback": "energy-icons:hydrogen-bus-48",
	});
}

export default Component;
