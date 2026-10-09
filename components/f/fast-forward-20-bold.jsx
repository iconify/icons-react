import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ggyrz3unk.css';
import '../../css/c/ci8zk7bhv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ggyrz3unk"/><path class="ci8zk7bhv"/>`,
		"fallback": "energy-icons:fast-forward-20-bold",
	});
}

export default Component;
