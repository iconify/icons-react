import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hwexvhbyv.css';
import '../../css/b/bau8ix_ox.css';
import '../../css/c/c65-ehvfy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hwexvhbyv"/><path class="bau8ix_ox"/><path class="c65-ehvfy"/>`,
		"fallback": "energy-icons:industrial-boiler-48",
	});
}

export default Component;
