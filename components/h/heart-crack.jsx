import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qw5qyibzg.css';
import '../../css/j/jfyntqbqj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qw5qyibzg"/><path class="jfyntqbqj"/>`,
		"fallback": "withicons-bauhaus:heart-crack",
	});
}

export default Component;
