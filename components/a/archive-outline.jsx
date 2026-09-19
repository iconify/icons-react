import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oiz8lpbui.css';
import '../../css/i/iufc13bmg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oiz8lpbui"/><rect class="iufc13bmg"/>`,
		"fallback": "eva:archive-outline",
	});
}

export default Component;
