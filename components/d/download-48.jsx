import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/upy-ybcph.css';
import '../../css/i/i1e923jjk.css';
import '../../css/z/z54ut_7zc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="upy-ybcph"/><path class="i1e923jjk"/><path class="z54ut_7zc"/>`,
		"fallback": "energy-icons:download-48",
	});
}

export default Component;
