import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gkv30x99a.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gkv30x99a"/>`,
		"fallback": "teenyicons:diamond-solid",
	});
}

export default Component;
