import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thcw70a2b.css';
import '../../css/v/vawhvpbke.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="thcw70a2b"/><path clip-rule="evenodd" class="vawhvpbke"/>`,
		"fallback": "basil:folder-block-solid",
	});
}

export default Component;
