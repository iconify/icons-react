import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jcsyndb6q.css';
import '../../css/k/kzh5-ccpp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jcsyndb6q"/><path class="kzh5-ccpp"/>`,
		"fallback": "stash:billing-info-solid",
	});
}

export default Component;
