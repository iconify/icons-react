import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cvy8sjoer.css';
import '../../css/b/b-nsf-bwn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cvy8sjoer"/><path class="b-nsf-bwn"/>`,
		"fallback": "tdesign:city-2-filled",
	});
}

export default Component;
