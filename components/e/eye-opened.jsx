import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uws2288gp.css';
import '../../css/b/b9dmkccal.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uws2288gp"/><path class="b9dmkccal"/>`,
		"fallback": "stash:eye-opened",
	});
}

export default Component;
