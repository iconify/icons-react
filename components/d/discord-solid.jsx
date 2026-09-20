import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wx0m9s7_b.css';
import '../../css/i/igandw20i.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wx0m9s7_b"/><path clip-rule="evenodd" class="igandw20i"/>`,
		"fallback": "teenyicons:discord-solid",
	});
}

export default Component;
