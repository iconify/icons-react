import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tkro71bfp.css';
import '../../css/q/qnudf1dbo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tkro71bfp"/><path clip-rule="evenodd" class="qnudf1dbo"/>`,
		"fallback": "qlementine-icons:boolean-exclude-16",
	});
}

export default Component;
