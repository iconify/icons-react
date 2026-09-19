import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jdfeq4sss.css';
import '../../css/z/zb08icbiq.css';
import '../../css/e/esr-srbpn.css';
import '../../css/j/jtbre-9dm.css';
import '../../css/w/wed910thq.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jdfeq4sss"/><path class="zb08icbiq"/><path class="esr-srbpn"/><path class="jtbre-9dm"/><path class="wed910thq"/>`,
		"fallback": "devicon:detaspace-wordmark",
	});
}

export default Component;
