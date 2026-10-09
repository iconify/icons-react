import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wvggpac7z.css';
import '../../css/p/pt1xasq3j.css';
import '../../css/j/j7xgo46fb.css';
import '../../css/m/mfbw6v_op.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wvggpac7z"/><path class="pt1xasq3j"/><path class="j7xgo46fb"/><path class="mfbw6v_op"/>`,
		"fallback": "energy-icons:house-key-48",
	});
}

export default Component;
