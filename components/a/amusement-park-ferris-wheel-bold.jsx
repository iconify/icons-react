import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gwric7s3u.css';
import '../../css/c/cg9u3_5pf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gwric7s3u"/><path class="cg9u3_5pf"/>`,
		"fallback": "streamline-ultimate:amusement-park-ferris-wheel-bold",
	});
}

export default Component;
