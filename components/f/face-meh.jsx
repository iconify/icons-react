import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/usr8d0vnk.css';
import '../../css/k/kjfh5hbvb.css';
import '../../css/i/i69ofbxca.css';
import '../../css/l/l6ib-iflx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="usr8d0vnk"/><circle class="kjfh5hbvb"/><circle class="i69ofbxca"/><path class="l6ib-iflx"/>`,
		"fallback": "circum:face-meh",
	});
}

export default Component;
