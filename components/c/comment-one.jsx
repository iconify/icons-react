import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/e/e9re5aczb.css';
import '../../css/m/mf0_hp87d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="e9re5aczb"/><path class="mf0_hp87d"/></g>`,
		"fallback": "icon-park:comment-one",
	});
}

export default Component;
