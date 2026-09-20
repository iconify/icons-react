import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bzdi1u2bq.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bzdi1u2bq"/>`,
		"fallback": "pinhead:arrows-left-right-above-waters",
	});
}

export default Component;
