import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/z/zjek9wked.css';
import '../../css/y/ygusiebsw.css';
import '../../css/w/wp8dfrk9x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="zjek9wked"/><path class="ygusiebsw"/><path class="wp8dfrk9x"/></g>`,
		"fallback": "streamline-logos:discourse-logo",
	});
}

export default Component;
