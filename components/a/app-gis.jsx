import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xkt5ohbxh.css';
import '../../css/u/ukfpmsbhg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ouiIcon__fillSecondary xkt5ohbxh"/><path class="ukfpmsbhg"/>`,
		"fallback": "oui:app-gis",
	});
}

export default Component;
