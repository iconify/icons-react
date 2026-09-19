import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ea_x7bcxj.css';
import '../../css/i/ii1apz97u.css';
import '../../css/t/t4y5bybeg.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid clr-i-solid-path-1 ea_x7bcxj"/><path class="clr-i-solid clr-i-solid-path-2 ii1apz97u"/><path class="clr-i-solid clr-i-solid-path-3 t4y5bybeg"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:caravan-solid",
	});
}

export default Component;
