import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rojie2byc.css';
import '../../css/z/zooty4bpc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rojie2byc"/><path class="zooty4bpc"/>`,
		"fallback": "boxicons:currency-notes",
	});
}

export default Component;
