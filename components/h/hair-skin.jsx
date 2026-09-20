import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/yzn_a0f7z.css';
import '../../css/s/s9h2h31km.css';
import '../../css/r/rd46urbeh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="yzn_a0f7z"/><path class="s9h2h31km"/><path class="rd46urbeh"/></g>`,
		"fallback": "streamline-ultimate:hair-skin",
	});
}

export default Component;
