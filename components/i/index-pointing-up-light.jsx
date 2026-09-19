import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y7raadesu.css';
import '../../css/q/qw6_pbcyu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y7raadesu"/><path class="qw6_pbcyu"/></g>`,
		"fallback": "fluent-emoji-flat:index-pointing-up-light",
	});
}

export default Component;
