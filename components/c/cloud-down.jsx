import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/a/am_aaq.css';
import '../../css/c/cn_flp.css';
import '../../css/a/a82c-b.css';
import '../../css/x/xl2vqf.css';
import '../../css/s/so-from-18.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c am_aaq"/><path class="a0m25c cn_flp"/><path class="a0m25c a82c-b"/><path class="a0m25c xl2vqf"/>`,
		"fallback": "line-md:cloud-down",
	});
}

export default Component;
