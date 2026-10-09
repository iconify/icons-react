import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wopchbcny.css';
import '../../css/w/wjqe3kpku.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wopchbcny"/><path class="wjqe3kpku"/>`,
		"fallback": "energy-icons:git-commit-20-bold",
	});
}

export default Component;
