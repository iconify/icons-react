import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/exxlsgbrx.css';
import '../../css/s/senys3bzh.css';
import '../../css/b/by3-pxb1k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="exxlsgbrx"/><path class="senys3bzh"/><path class="by3-pxb1k"/>`,
		"fallback": "streamline-ultimate:coding-apps-website-data-conversion-documents-2-bold",
	});
}

export default Component;
