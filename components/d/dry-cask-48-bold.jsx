import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ownw2kb0e.css';
import '../../css/t/t1dfkwo5j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ownw2kb0e"/><path class="t1dfkwo5j"/>`,
		"fallback": "energy-icons:dry-cask-48-bold",
	});
}

export default Component;
