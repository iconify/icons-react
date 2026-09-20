import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j9k8lxuwq.css';
import '../../css/g/g-7edib4n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j9k8lxuwq"/><path class="g-7edib4n"/>`,
		"fallback": "material-icon-theme:folder-functions-open",
	});
}

export default Component;
