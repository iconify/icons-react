import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/plhb_68gt.css';
import '../../css/x/xwzdy07rg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="plhb_68gt"/><path class="xwzdy07rg"/>`,
		"fallback": "nimbus:external-link",
	});
}

export default Component;
