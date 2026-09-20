import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hef1qdbqi.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hef1qdbqi"/>`,
		"fallback": "teenyicons:down-circle-solid",
	});
}

export default Component;
