import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kgtsofb-b.css';
import '../../css/k/ke2j7bc4a.css';
import '../../css/o/o24sug9tq.css';
import '../../css/y/yjk-_bc4n.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kgtsofb-b"/><path class="ke2j7bc4a"/><path class="o24sug9tq"/><path class="yjk-_bc4n"/>`,
		"fallback": "energy-icons:ev-charger-20",
	});
}

export default Component;
