import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jaaaw1bso.css';
import '../../css/n/nlnn0ibiz.css';
import '../../css/x/xdrfk-b8k.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jaaaw1bso"/><path class="nlnn0ibiz"/><path class="xdrfk-b8k"/>`,
		"fallback": "ep:add-location",
	});
}

export default Component;
