import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ds2udfbbe.css';
import '../../css/g/gr02mac6c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ds2udfbbe"/><path class="gr02mac6c"/>`,
		"fallback": "prime:file-excel",
	});
}

export default Component;
