import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/u/uvopq7b7n.css';
import '../../css/l/l5lxwqaml.css';
import '../../css/l/l_k0w3box.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="uvopq7b7n"/><path class="l5lxwqaml"/><path class="l_k0w3box"/></g>`,
		"fallback": "streamline-sharp-color:inbox-post",
	});
}

export default Component;
