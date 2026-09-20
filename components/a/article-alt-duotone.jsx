import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lfyooabog.css';
import '../../css/g/gxd-8e_9n.css';
import '../../css/m/mjkpimbqx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lfyooabog"/><path class="gxd-8e_9n"/><path class="mjkpimbqx"/>`,
		"fallback": "stash:article-alt-duotone",
	});
}

export default Component;
