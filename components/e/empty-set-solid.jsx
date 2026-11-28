import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pvm2gtbqu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pvm2gtbqu"/>`,
		"fallback": "iconaut:empty-set-solid",
	});
}

export default Component;
