import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eyx3e6b3g.css';
import '../../css/w/wnjmof43i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eyx3e6b3g"/><path class="wnjmof43i"/>`,
		"fallback": "streamline-ultimate:folder-add-bold",
	});
}

export default Component;
