import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mg--s-b0r.css';
import '../../css/o/ozim3qb0g.css';
import '../../css/c/c65-ehvfy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mg--s-b0r"/><path class="ozim3qb0g"/><path class="c65-ehvfy"/>`,
		"fallback": "energy-icons:hedgerow-48",
	});
}

export default Component;
