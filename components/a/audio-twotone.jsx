import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iwft8icjo.css';
import '../../css/g/g3ep0ud-q.css';
import '../../css/k/k1nnfsbnq.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iwft8icjo"/><path class="g3ep0ud-q"/><path class="k1nnfsbnq"/>`,
		"fallback": "ant-design:audio-twotone",
	});
}

export default Component;
