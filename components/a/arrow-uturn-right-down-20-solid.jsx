import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/apkqqc7pd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="apkqqc7pd"/>`,
		"fallback": "sidekickicons:arrow-uturn-right-down-20-solid",
	});
}

export default Component;
