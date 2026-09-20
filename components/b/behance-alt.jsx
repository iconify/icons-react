import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jmaox4uuj.css';
import '../../css/u/uxy6e-jmh.css';
import '../../css/b/bamdvlmwv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jmaox4uuj"/><path class="uxy6e-jmh"/><path class="bamdvlmwv"/>`,
		"fallback": "uim:behance-alt",
	});
}

export default Component;
