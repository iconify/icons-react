import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/py7rdhbaz.css';
import '../../css/w/wj977u-ag.css';
import '../../css/i/ieo-h5b2e.css';
import '../../css/j/jpqygqbtv.css';
import '../../css/t/tqch-griz.css';
import '../../css/c/cuj72kbuh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="py7rdhbaz"/><path class="wj977u-ag"/><path class="ieo-h5b2e"/><path class="jpqygqbtv"/><path class="tqch-griz"/><path class="cuj72kbuh"/>`,
		"fallback": "uim:gitlab-alt",
	});
}

export default Component;
