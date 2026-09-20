import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iusjz_bzl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iusjz_bzl"/>`,
		"fallback": "mdi:database-settings",
	});
}

export default Component;
