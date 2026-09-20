import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yagq6hbek.css';
import '../../css/f/f6k8znems.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yagq6hbek"/><path class="f6k8znems"/>`,
		"fallback": "stash:image-switch-light",
	});
}

export default Component;
