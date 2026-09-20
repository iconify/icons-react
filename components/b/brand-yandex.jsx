import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zqnz_wbwy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zqnz_wbwy"/>`,
		"fallback": "tabler:brand-yandex",
	});
}

export default Component;
