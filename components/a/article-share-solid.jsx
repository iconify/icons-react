import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p_w_6xb3l.css';
import '../../css/n/njxe4acos.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p_w_6xb3l"/><path class="njxe4acos"/>`,
		"fallback": "stash:article-share-solid",
	});
}

export default Component;
