import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ja7-tfbwg.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ja7-tfbwg"/>`,
		"fallback": "teenyicons:fingerprint-solid",
	});
}

export default Component;
