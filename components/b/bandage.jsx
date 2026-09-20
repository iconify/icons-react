import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kgeg_kdjc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kgeg_kdjc"/>`,
		"fallback": "streamline:bandage",
	});
}

export default Component;
