import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xxmf65bfj.css';

const viewBox = {"width":355,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xxmf65bfj"/>`,
		"fallback": "file-icons:easybuild",
	});
}

export default Component;
