import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lnyw0abwe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lnyw0abwe"/>`,
		"fallback": "tabler:blob-dashed",
	});
}

export default Component;
