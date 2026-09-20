import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zj3igacas.css';
import '../../css/c/c8umzkhsx.css';
import '../../css/m/md_y0zbjb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zj3igacas"/><path class="c8umzkhsx"/><path class="md_y0zbjb"/>`,
		"fallback": "streamline-pixel:entertainment-events-hobbies-video-camera-film-3",
	});
}

export default Component;
