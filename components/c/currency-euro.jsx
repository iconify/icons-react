import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iynpo30pd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iynpo30pd"/>`,
		"fallback": "carbon:currency-euro",
	});
}

export default Component;
