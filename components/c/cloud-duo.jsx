import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lkgs06hvj.css';
import '../../css/s/selc8tm1k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lkgs06hvj secondary"/><path class="primary selc8tm1k"/>`,
		"fallback": "iconaut:cloud-duo",
	});
}

export default Component;
