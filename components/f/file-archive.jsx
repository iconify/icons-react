import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jmxyuhnqn.css';
import '../../css/r/relvolb9u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jmxyuhnqn"/><path class="relvolb9u"/>`,
		"fallback": "bxs:file-archive",
	});
}

export default Component;
