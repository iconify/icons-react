import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9s5gg3pd.css';
import '../../css/t/tbjrgk0an.css';
import '../../css/w/wfo3hebdq.css';
import '../../css/k/kolyvmb2m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s9s5gg3pd"/><path class="tbjrgk0an"/><path class="wfo3hebdq"/><path class="kolyvmb2m"/>`,
		"fallback": "energy-icons:gem-48-bold",
	});
}

export default Component;
