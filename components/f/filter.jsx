import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cbeb90ock.css';
import '../../css/h/hmezibw8e.css';
import '../../css/m/mnjrvv75q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cbeb90ock wm-k"/><path class="hmezibw8e wm-k"/><path class="mnjrvv75q wm-k"/>`,
		"fallback": "withicons-bauhaus:filter",
	});
}

export default Component;
