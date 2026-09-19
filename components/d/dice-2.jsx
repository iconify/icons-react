import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x5kaqn3pd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x5kaqn3pd"/>`,
		"fallback": "gravity-ui:dice-2",
	});
}

export default Component;
