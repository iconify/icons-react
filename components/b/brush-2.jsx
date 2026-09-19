import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xca2aubva.css';
import '../../css/o/on_40xtwh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duoicon-primary-layer xca2aubva"/><path class="duoicon-secondary-layer on_40xtwh"/>`,
		"fallback": "duo-icons:brush-2",
	});
}

export default Component;
