import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l8nwnmb-m.css';
import '../../css/p/p9k80_4qe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duoicon-primary-layer l8nwnmb-m"/><path class="duoicon-secondary-layer p9k80_4qe"/>`,
		"fallback": "duo-icons:cake",
	});
}

export default Component;
