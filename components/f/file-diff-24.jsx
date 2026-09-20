import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xir71cb7c.css';
import '../../css/n/n6l7qezyb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xir71cb7c"/><path class="n6l7qezyb"/>`,
		"fallback": "octicon:file-diff-24",
	});
}

export default Component;
