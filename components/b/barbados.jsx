import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ip1kq0bvs.css';
import '../../css/n/nu-yx8b6b.css';
import '../../css/a/awv06sg9f.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ip1kq0bvs"/><path class="nu-yx8b6b"/><path class="awv06sg9f"/>`,
		"fallback": "tabler-flags:barbados",
	});
}

export default Component;
