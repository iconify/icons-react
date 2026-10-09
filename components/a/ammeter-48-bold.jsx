import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qtgmy3b7z.css';
import '../../css/u/uskkbacik.css';
import '../../css/n/nfmjk5b5j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qtgmy3b7z"/><path class="uskkbacik"/><path class="nfmjk5b5j"/>`,
		"fallback": "energy-icons:ammeter-48-bold",
	});
}

export default Component;
