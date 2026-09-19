import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sebzf9cjk.css';
import '../../css/u/ujddx7bhk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sebzf9cjk"/><path class="ujddx7bhk"/>`,
		"fallback": "bx:bxs-data",
	});
}

export default Component;
