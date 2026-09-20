import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zr4bq0a-c.css';
import '../../css/k/kb19e1bow.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zr4bq0a-c"/><path clip-rule="evenodd" class="kb19e1bow"/>`,
		"fallback": "streamline-sharp:heart-rate-clipboard-solid",
	});
}

export default Component;
