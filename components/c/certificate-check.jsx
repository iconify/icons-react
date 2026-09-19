import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ttd3jyrng.css';
import '../../css/v/v7rhl_77b.css';
import '../../css/b/burecob8o.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ttd3jyrng"/><path class="v7rhl_77b"/><path class="burecob8o"/>`,
		"fallback": "carbon:certificate-check",
	});
}

export default Component;
