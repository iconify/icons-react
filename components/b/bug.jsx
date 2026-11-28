import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rdvl-y1zy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rdvl-y1zy"/>`,
		"fallback": "noviair:bug",
	});
}

export default Component;
