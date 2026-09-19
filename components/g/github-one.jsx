import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sz1je_b9j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sz1je_b9j"/>`,
		"fallback": "icon-park-outline:github-one",
	});
}

export default Component;
