import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mlrhk_-_t.css';
import '../../css/b/blghhjben.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mlrhk_-_t"/><path class="blghhjben"/>`,
		"fallback": "pixel:face-grin-solid",
	});
}

export default Component;
