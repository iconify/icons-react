import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u3cao43jn.css';
import '../../css/f/f13cyk52i.css';
import '../../css/s/smok2x2qy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u3cao43jn"/><path clip-rule="evenodd" class="f13cyk52i"/><path class="smok2x2qy"/>`,
		"fallback": "streamline-plump:inbox-post-solid",
	});
}

export default Component;
