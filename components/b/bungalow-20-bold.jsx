import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s8m_o6v-h.css';
import '../../css/a/arhsv8bbj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s8m_o6v-h"/><path class="arhsv8bbj"/>`,
		"fallback": "energy-icons:bungalow-20-bold",
	});
}

export default Component;
