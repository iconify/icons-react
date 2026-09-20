import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hmtx4eb8j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hmtx4eb8j"/>`,
		"fallback": "simple-icons:cnn",
	});
}

export default Component;
