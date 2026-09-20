import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hhvvn0bca.css';
import '../../css/j/jdrr3im4g.css';
import '../../css/j/j1qa98x7n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hhvvn0bca"/><path class="jdrr3im4g"/><path class="j1qa98x7n"/>`,
		"fallback": "streamline-pixel:health-virus",
	});
}

export default Component;
