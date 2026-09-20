import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pkid2hbfq.css';
import '../../css/f/fqaz6r90g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pkid2hbfq"/><path class="fqaz6r90g"/>`,
		"fallback": "si:copy-alt-fill",
	});
}

export default Component;
