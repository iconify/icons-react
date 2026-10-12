import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kqbane7zo.css';
import '../../css/v/vuoehu_3b.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kqbane7zo"/><path class="vuoehu_3b"/>`,
		"fallback": "garden:check-badge-stroke-20",
	});
}

export default Component;
