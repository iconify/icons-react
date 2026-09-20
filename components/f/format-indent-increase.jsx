import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/anl7xs23s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="anl7xs23s"/>`,
		"fallback": "mdi-light:format-indent-increase",
	});
}

export default Component;
