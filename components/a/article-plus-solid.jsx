import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p_w_6xb3l.css';
import '../../css/f/f7n_6objg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p_w_6xb3l"/><path class="f7n_6objg"/>`,
		"fallback": "stash:article-plus-solid",
	});
}

export default Component;
