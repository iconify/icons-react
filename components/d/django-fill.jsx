import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jyc322s0u.css';
import '../../css/j/jml6rubew.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jyc322s0u"/><path class="jml6rubew"/>`,
		"fallback": "akar-icons:django-fill",
	});
}

export default Component;
