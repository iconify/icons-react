import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tw4336b9k.css';
import '../../css/p/phnyk0rqy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tw4336b9k"/><path class="phnyk0rqy"/>`,
		"fallback": "energy-icons:bbq-48",
	});
}

export default Component;
