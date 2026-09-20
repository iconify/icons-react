import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n004xq-kn.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n004xq-kn"/>`,
		"fallback": "teenyicons:cplusplus-solid",
	});
}

export default Component;
