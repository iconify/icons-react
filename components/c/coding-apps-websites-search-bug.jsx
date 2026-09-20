import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f6k8e83ng.css';
import '../../css/x/x8w8erb9x.css';
import '../../css/k/ka7_tbczt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f6k8e83ng"/><path class="x8w8erb9x"/><path class="ka7_tbczt"/>`,
		"fallback": "streamline-pixel:coding-apps-websites-search-bug",
	});
}

export default Component;
