import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/km2fl-ght.css';
import '../../css/n/nhk0vvrvh.css';
import '../../css/s/s39uf-bmg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="km2fl-ght"/><path class="nhk0vvrvh"/><path class="s39uf-bmg"/>`,
		"fallback": "energy-icons:chart-line-dots-20",
	});
}

export default Component;
