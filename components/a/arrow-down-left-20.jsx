import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqs0eobgx.css';
import '../../css/e/ejw3spdse.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sqs0eobgx"/><path class="ejw3spdse"/>`,
		"fallback": "energy-icons:arrow-down-left-20",
	});
}

export default Component;
