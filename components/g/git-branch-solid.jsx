import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bae35fb2p.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bae35fb2p"/>`,
		"fallback": "teenyicons:git-branch-solid",
	});
}

export default Component;
