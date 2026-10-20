import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sbp_cdbbx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sbp_cdbbx"/>`,
		"fallback": "vadivam:chef-hat",
	});
}

export default Component;
