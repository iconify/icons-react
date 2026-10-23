import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uje9hhbpj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uje9hhbpj"/>`,
		"fallback": "vadivam:circle-plus",
	});
}

export default Component;
