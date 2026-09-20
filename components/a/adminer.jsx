import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qq0eadb-w.css';
import '../../css/p/pav98pbev.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qq0eadb-w"/><path class="pav98pbev"/>`,
		"fallback": "selfhst:adminer",
	});
}

export default Component;
