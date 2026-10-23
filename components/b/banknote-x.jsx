import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b5tg_i0yt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b5tg_i0yt"/>`,
		"fallback": "vadivam:banknote-x",
	});
}

export default Component;
