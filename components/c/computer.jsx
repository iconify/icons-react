import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fmpd__bdx.css';
import '../../css/a/a30rl-bmq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b fmpd__bdx"/><path class="a30rl-bmq b"/>`,
		"fallback": "boxicons:computer",
	});
}

export default Component;
