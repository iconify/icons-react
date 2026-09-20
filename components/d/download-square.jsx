import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/kl12fbs6f.css';
import '../../css/q/qehczibes.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="kl12fbs6f"/><path class="qehczibes"/></g>`,
		"fallback": "streamline-sharp:download-square",
	});
}

export default Component;
