import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hmk826btk.css';
import '../../css/n/nd2uznbbu.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hmk826btk"/><path class="nd2uznbbu"/>`,
		"fallback": "ep:aim",
	});
}

export default Component;
