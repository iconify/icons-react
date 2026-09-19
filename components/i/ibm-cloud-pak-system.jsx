import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gids-nb6q.css';
import '../../css/h/h3tk0hycl.css';
import '../../css/f/f86xz6sdl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gids-nb6q"/><path class="h3tk0hycl"/><path class="f86xz6sdl"/>`,
		"fallback": "carbon:ibm-cloud-pak-system",
	});
}

export default Component;
