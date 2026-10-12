import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tj2tc7b5c.css';
import '../../css/z/zoxpwbb0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tj2tc7b5c"/><path class="zoxpwbb0y"/>`,
		"fallback": "lucide-extended:briefcase-plus-filled",
	});
}

export default Component;
