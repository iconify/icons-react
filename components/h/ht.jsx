import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fjr0c7bie.css';
import '../../css/m/md286fbip.css';
import '../../css/t/td3thuy1e.css';
import '../../css/t/t9ubb0kvl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="fjr0c7bie"/><g class="md286fbip"><path class="td3thuy1e"/><path class="t9ubb0kvl"/></g></g>`,
		"fallback": "cryptocurrency-color:ht",
	});
}

export default Component;
