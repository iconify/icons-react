import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lgkqhtgri.css';
import '../../css/b/b7__w3xsq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lgkqhtgri"/><path class="b7__w3xsq"/>`,
		"fallback": "selfhst:dockerizalo",
	});
}

export default Component;
