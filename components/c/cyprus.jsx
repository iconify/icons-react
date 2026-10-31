import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmibc4bxr.css';
import '../../css/x/xr8ziu2ag.css';
import '../../css/a/a31qyebym.css';
import '../../css/m/mm9e_xqhy.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nmibc4bxr"/><path class="xr8ziu2ag"/><path class="a31qyebym"/><path class="mm9e_xqhy"/>`,
		"fallback": "tabler-flags:cyprus",
	});
}

export default Component;
