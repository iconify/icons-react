import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/myl6d8w3w.css';
import '../../css/b/b4otazbmd.css';
import '../../css/k/krk28sopl.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="myl6d8w3w"/><path class="b4otazbmd"/><path class="krk28sopl"/>`,
		"fallback": "energy-icons:flow-meter-20",
	});
}

export default Component;
