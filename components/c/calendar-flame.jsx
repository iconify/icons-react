import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nnpi_abmg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nnpi_abmg"/>`,
		"fallback": "tabler:calendar-flame",
	});
}

export default Component;
