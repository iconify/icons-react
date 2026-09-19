import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/npewmlxrc.css';
import '../../css/u/unp6fccbt.css';
import '../../css/n/na_wzcctt.css';
import '../../css/e/e4sbecbzl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="npewmlxrc"/><path class="unp6fccbt"/><path class="na_wzcctt"/><path class="e4sbecbzl"/>`,
		"fallback": "flat-color-icons:diploma-1",
	});
}

export default Component;
