import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/udnf14b2t.css';
import '../../css/x/xz4g601-d.css';
import '../../css/d/ddxxdn1gm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="udnf14b2t wm-k"/><path class="wm-k xz4g601-d"/><path class="ddxxdn1gm wm-a"/>`,
		"fallback": "withicons-bauhaus:egg",
	});
}

export default Component;
