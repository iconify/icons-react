import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/frs8--b9a.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="frs8--b9a"/>`,
		"fallback": "teenyicons:game-controller-retro-solid",
	});
}

export default Component;
