import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gzws48i-p.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gzws48i-p"/>`,
		"fallback": "teenyicons:clipboard-tick-solid",
	});
}

export default Component;
