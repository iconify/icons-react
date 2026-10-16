import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/svxkqfaev.css';
import '../../css/w/wxvl6gbzy.css';
import '../../css/k/ko9pd73aq.css';
import '../../css/c/c98cqvbqj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="svxkqfaev"/><path class="wxvl6gbzy"/><path class="ko9pd73aq"/><path class="c98cqvbqj"/>`,
		"fallback": "energy-icons:chart-treemap-20",
	});
}

export default Component;
