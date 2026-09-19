import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bq-0zhbab.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bq-0zhbab"/>`,
		"fallback": "healthicons:breeding-sites",
	});
}

export default Component;
