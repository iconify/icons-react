import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zr0p19bkd.css';
import '../../css/z/zfxhzybhp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zr0p19bkd"/><path class="zfxhzybhp"/>`,
		"fallback": "energy-icons:chef-hat-48",
	});
}

export default Component;
