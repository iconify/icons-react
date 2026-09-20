import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mz763296q.css';
import '../../css/k/kgp-egvzp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mz763296q"/><path class="kgp-egvzp"/>`,
		"fallback": "stash:espiral-book",
	});
}

export default Component;
