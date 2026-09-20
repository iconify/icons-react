import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7lr2mkyr.css';
import '../../css/h/hhhhlk_ra.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j7lr2mkyr"/><path class="hhhhlk_ra"/>`,
		"fallback": "teenyicons:church-solid",
	});
}

export default Component;
