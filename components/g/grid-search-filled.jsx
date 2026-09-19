import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v4dpz7bpj.css';
import '../../css/n/nk8mvcwfe.css';
import '../../css/o/otisgkbwr.css';
import '../../css/x/x4muw1bdl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="v4dpz7bpj"/><rect class="nk8mvcwfe"/><rect class="otisgkbwr"/><path class="x4muw1bdl"/>`,
		"fallback": "boxicons:grid-search-filled",
	});
}

export default Component;
