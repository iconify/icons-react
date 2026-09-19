import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hyd6mobsh.css';
import '../../css/s/sv7nt6skj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hyd6mobsh"/><path class="sv7nt6skj"/>`,
		"fallback": "bx:export",
	});
}

export default Component;
