import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r0v9jjbyk.css';
import '../../css/x/x3ykjurxz.css';
import '../../css/c/czxvcbrup.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r0v9jjbyk"/><path class="x3ykjurxz"/><path class="czxvcbrup"/>`,
		"fallback": "icomoon-free:behance2",
	});
}

export default Component;
