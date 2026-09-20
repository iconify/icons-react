import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ye9nqmbve.css';
import '../../css/w/wo2kix3uq.css';
import '../../css/i/ijwz2bbji.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ye9nqmbve"/><path class="wo2kix3uq"/><path class="ijwz2bbji"/>`,
		"fallback": "oui:add-bookmark",
	});
}

export default Component;
