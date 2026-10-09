import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/otcc7pvhw.css';
import '../../css/p/p6vzlj6qq.css';
import '../../css/s/s7q2gertg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="otcc7pvhw"/><path class="p6vzlj6qq"/><path class="s7q2gertg"/>`,
		"fallback": "energy-icons:fingerprint-48",
	});
}

export default Component;
