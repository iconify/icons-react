import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bnoop7bqe.css';
import '../../css/h/h_ao2xbnk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bnoop7bqe"/><path class="h_ao2xbnk"/>`,
		"fallback": "streamline-ultimate:american-football-helmet-bold",
	});
}

export default Component;
