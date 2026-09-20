import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ttck2cbln.css';
import '../../css/g/gd-53hb5a.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ouiIcon__fillSecondary ttck2cbln"/><path class="gd-53hb5a"/>`,
		"fallback": "oui:app-lens",
	});
}

export default Component;
