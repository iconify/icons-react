import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/agu67jb3l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="agu67jb3l"/>`,
		"fallback": "heroicons:cog-8-tooth-solid",
	});
}

export default Component;
