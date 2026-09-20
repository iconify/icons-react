import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/a/ae_viy.css';
import '../../css/c/cn_flp.css';
import '../../css/s/so-from-22.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c ae_viy"/><path class="a0m25c cn_flp"/>`,
		"fallback": "line-md:cloud",
	});
}

export default Component;
