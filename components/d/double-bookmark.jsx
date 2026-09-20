import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/i/ifr191bxs.css';
import '../../css/v/vy4pqwocd.css';
import '../../css/s/s3kmembqp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="ifr191bxs"/><path class="vy4pqwocd"/><path class="s3kmembqp"/></g>`,
		"fallback": "streamline-sharp-color:double-bookmark",
	});
}

export default Component;
