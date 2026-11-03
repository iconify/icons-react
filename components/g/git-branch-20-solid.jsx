import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pqs0t7b4n.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pqs0t7b4n"/>`,
		"fallback": "sidekickicons:git-branch-20-solid",
	});
}

export default Component;
