import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b89dqjg6u.css';
import '../../css/s/s39gonhkd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b89dqjg6u"/><path class="s39gonhkd"/>`,
		"fallback": "selfhst:headplane-dark",
	});
}

export default Component;
