import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qofievr1j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qofievr1j"/>`,
		"fallback": "icon-park-outline:hammer-and-anvil",
	});
}

export default Component;
