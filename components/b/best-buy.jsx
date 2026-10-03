import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vbeixbb9a.css';
import '../../css/p/ppaop13hw.css';
import '../../css/o/ok0rzl7qm.css';

const viewBox = {"width":1000,"height":584.485};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vbeixbb9a"/><path class="ppaop13hw"/><path class="ok0rzl7qm"/>`,
		"fallback": "thesvg-color:best-buy",
	});
}

export default Component;
