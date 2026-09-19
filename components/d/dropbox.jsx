import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nvnjtkb5c.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nvnjtkb5c"/>`,
		"fallback": "entypo-social:dropbox",
	});
}

export default Component;
