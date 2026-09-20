import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/u/ullfkxb5f.css';
import '../../css/e/eah07vqig.css';
import '../../css/n/notak2bff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="ullfkxb5f"/><path class="eah07vqig"/><path class="notak2bff"/></g>`,
		"fallback": "streamline-logos:bing-logo-1",
	});
}

export default Component;
